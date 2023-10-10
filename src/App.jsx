import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        // console.log("Test123");
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
        // console.log(contactLists);
      } catch (error) {
        console.log("error");
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className=" relative flex items-center">
            <FiSearch className=" ml-1 text-white flex-grow text-3xl absolute" />
            <input
              type="text"
              className=" outline-none pl-9 text-white flex-grow border border-white bg-transparent rounded-md h-10"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="text-white text-5xl cursor-pointer "
          />
        </div>
        <div className="mt-4 flex gap-4 flex-col">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
