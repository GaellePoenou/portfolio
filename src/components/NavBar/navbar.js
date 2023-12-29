import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">01.Home</Link>
        <Link className="desktopMenuListItem">02.About</Link>
        <Link className="desktopMenuListItem">03.Portfolio</Link>
        <Link className="desktopMenuListItem">04.Curriculum</Link>
      </div>
      <button className="desktopMenuBtn">Contact</button>
    </nav>
  );
};

export default Navbar;
