import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setopen] = useState(false); // for the menu item

  const user = true;

  return (
    <nav>
      <div className="nav-left">
        <a className="alogo" href="/">
          <img className="logo" src="/cifar-logo-.jpeg" alt="logo" />
        </a>

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      <div className="nav-right">
        {user ? (
          <div className="user">
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              
              <span>Jhon Doe</span>
              <Link to="/profile" className="profile">
              

              <div className="notification">3</div>
              <span>Profile</span>
              </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a className="Register" href="/">
              Sign Up
            </a>
          </>
        )}
      </div>

      <div className="menuIcon">
        <img src="/menu.png" alt="" onClick={() => setopen(!open)} />
      </div>

      <div className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
      </div>
    </nav>
  );
}
export default Navbar;
