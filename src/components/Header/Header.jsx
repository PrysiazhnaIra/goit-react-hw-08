import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/contacts" className={css.navLink}>
            Contacts
          </NavLink>
        </li>
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
        <li className={css.item}>
          <button className={css.btn}>Exit</button>
        </li>
      </ul>
    </header>
  );
}
