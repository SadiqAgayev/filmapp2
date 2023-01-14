import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/watchlist"}>Watchlists</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to={"/watched"}>Watched</Link>
            </li>
            <li>
              <Link to={"/add"} className="btn">
                <BsPlusLg />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
