import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const getdate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const msg = `${year}.${month}.${date}`;
    return msg;
  };

  return (
    <div className="nav row">
      <h1 className="col s8 m8 l8">
        {" "}
        <Link to="/">Popular Top Movies / {getdate()}</Link>
      </h1>
      <ul>
        <li className="col s2 m2 l2">
          <Link to="/about">About Us </Link>
        </li>
        <li className="col s2 m2 l2">
          <Link to="/contact">Contact Us </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
