import { Outlet } from "react-router";
import Navbar from "../navbar-04/navbar-04";

function FrontLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default FrontLayout;
