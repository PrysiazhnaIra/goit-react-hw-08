import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {!isLoggedIn && (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </div>
  );
}
