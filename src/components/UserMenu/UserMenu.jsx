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
      <h3>{user.name}</h3>
      <ul className={css.list}>
        <li className={css.item}></li>
        <li className={css.item}></li>
        {!isLoggedIn && (
          <>
            <li className={css.item}>
              <NavLink to="/login" className={css.navLink}>
                Login
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/register" className={css.navLink}>
                Register
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li className={css.item}>
            <button className={css.btn} onClick={() => dispatch(logoutThunk())}>
              Exit
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
