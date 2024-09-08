import { useState } from "react";
import "./Navbar.scss"

function Navbar() {
  const[open,setopen]=useState(false)
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
        <a href="/">Sign In</a>
        <a className="Register" href="/">Sign Up</a>
      </div>
      
      <div className="menuIcon">
        <img src="/menu.png"  alt="" onClick={()=>setopen(!open)} />
      </div>

      <div className= {open ? "menu active":"menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
      </div>


    </nav>
  )

}
export default Navbar;