import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors";
// import { logOut } from "../../redux/auth/operations";
// import PageTitle from "../PageTitle/PageTitle";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <PageTitle>Welcome, {user.name} !</PageTitle>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}