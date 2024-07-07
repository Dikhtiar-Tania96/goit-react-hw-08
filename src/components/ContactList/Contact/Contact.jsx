import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { deleteContact } from "../../../redux/contacts/operations";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li>
      <div>
        <h3>
          <BsFillPersonFill size={30} color="black" />
          {name}
        </h3>
        <p>
          <BsFillTelephoneFill size={30} color="black" />
          {number}
        </p>
      </div>

      <button onClick={handleDelete} type="submit">
        🗑️
      </button>
    </li>
  );
};