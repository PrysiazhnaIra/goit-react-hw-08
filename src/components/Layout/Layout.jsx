import { Outlet } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";

export default function Layout() {
  return (
    <div>
      <UserMenu />
      <Outlet />
    </div>
  );
}
