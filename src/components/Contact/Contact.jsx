import { BiSolidUser } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={s.contact}>
        <div className={s.info}>
          <p className={s.text}>
            <BiSolidUser />
            {name}
          </p>
          <p className={s.text}>
            <FaPhone />
            {number}
          </p>
        </div>
        <button
          className={s.btnDelete}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
