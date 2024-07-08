import { Link } from "react-router-dom";

import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "../../components/forms/LoginForm";
import css from './LoginPage.module.css'

export default function LoginPage() {
  return (
    <div className={css.loginDiv}>
      <PageTitle>Please, log in</PageTitle>
      <LoginForm/>
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
}