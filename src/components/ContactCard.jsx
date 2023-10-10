import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine, RiDeleteBin2Fill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";

const ContactCard = ({ contact }) => {
  return (
    <div
      key={contact.id}
      className=" rounded-lg bg-yellow flex justify-between items-center p-2  "
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-orange text-4xl" />
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className=" text-sm ">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-2xl gap-1">
        <BiSolidEdit className=" cursor-pointer " />
        <IoMdTrash className="text-orange cursor-pointer " />
      </div>
    </div>
  );
};

export default ContactCard;
