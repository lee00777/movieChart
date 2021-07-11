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
      <h1 className="col s7 m8 l6">
        <Link to="/">
          WHAT'S POPULAR <span style={{ fontSize: "1.5rem", color: "grey" }}> | {getdate()} </span>
        </Link>
      </h1>

      <ul>
        <li className="col s2 m2 l2">
          <Link to="/topmovies">Top Rated </Link>
        </li>
        <li className="col s3 m2 l2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
