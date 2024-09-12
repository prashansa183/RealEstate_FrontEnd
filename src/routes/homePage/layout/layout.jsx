import "./layout.scss";
import Navbar from "../../../components/navbar/Navbar";
import HomePage from "../homePage";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="conatiner">
      <div className="layout">
        <div className="navbar ">
          <Navbar />
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
