// Header.js
import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import logo from "./logo.jpg";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const goLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/akshat-dutta/";
  };

  const custSupp = () => {
    navigate("/customer-support");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo" />
      </Link>
      <div className="header__search">
        <form onSubmit={handleSearch}>
          <input
            className="header__searchInput"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon className="header__searchIcon" />
        </form>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div onClick={goLinkedin} className="header__option">
          <span className="header__optionLineOne">Contact the</span>
          <span className="header__optionLineTwo">Creator</span>
        </div>
        <div onClick={custSupp} className="header__option">
          <span className="header__optionLineOne">Customer</span>
          <span className="header__optionLineTwo">Support</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
