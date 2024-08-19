import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {!isLoggedIn && (
        <div className={css.block}>
          <NavLink to="/login" className={css.navLink}>
            Login
          </NavLink>
          <NavLink to="/register" className={css.navLink}>
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
}
