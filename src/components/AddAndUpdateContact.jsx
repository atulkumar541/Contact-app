import { addDoc, collection } from "firebase/firestore";
import Modal from "./Modal";
import { Form, Field, Formik } from "formik";
import { db } from "../config/firebase";

const AddAndUpdateContact = ({ isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      //   console.log("Added Successfully...");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-1 ">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                placeholder="Enter Name"
                className=" h-10 border p-1 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter Email"
                className=" h-10 border p-1 outline-none "
              />
            </div>
            <button className=" bg-orange px-2 py-3 border self-center">
              Add Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
