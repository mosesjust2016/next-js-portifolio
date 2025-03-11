import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="mjjustme26@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+260 974 07 2829" Image={FiPhone} />
      <SingleInfo text="Lusaka, Zzmbia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
