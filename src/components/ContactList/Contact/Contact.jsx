import { useDispatch } from "react-redux";

import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { deleteContact } from "../../../redux/contacts/operations";
import css from './Contact.module.css'

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactItem}>
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

      <button className={css.delContact} onClick={handleDelete} type="submit">
        ❌
      </button>
    </li>
  );
};