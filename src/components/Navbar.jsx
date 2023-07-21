import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {BsFillSunFill} from "react-icons/bs"
import {BsFillMoonFill} from "react-icons/bs"

const Navbar = () => {
  return (
    <nav className="bg-dark w-100 d-flex justify-content-between py-3 px-5">
      <Link to="/">
        <img
          style={{ width: "160px", height: "auto", cursor: "pointer" }}
          src={logo}
          alt=""
        />
      </Link>
      <button style={{background: "transparent", border: "none", color: "white", fontSize: "2.5rem"}}>{<BsFillSunFill/>}</button>
    </nav>
  );
};

export default Navbar;
