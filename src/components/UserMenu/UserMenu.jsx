import { NavLink } from "react-router-dom";
import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className={css.header}>
      <h3 className={css.userName}>Welcome {user.name}</h3>
      {isLoggedIn && (
        <button className={css.btn} onClick={() => dispatch(logoutThunk())}>
          Exit
        </button>
      )}
    </div>
  );
}
