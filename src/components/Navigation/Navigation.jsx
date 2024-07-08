import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";
import PageTitle from "../PageTitle/PageTitle";


const makeLinksClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <div>
        <PageTitle>Phonebook</PageTitle>
      </div>
      <div >
        <NavLink to="/">
          <span >Home</span>
        </NavLink>
        {isLoggedIn && (
          <NavLink  to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
}