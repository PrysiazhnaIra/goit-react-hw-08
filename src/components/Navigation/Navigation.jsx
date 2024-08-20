import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navBlock}>
      <NavLink to="/" className="btn">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="btn">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
