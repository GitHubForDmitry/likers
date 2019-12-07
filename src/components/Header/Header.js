import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

// const arr = ['a', 'b', 'c'];
export default function Header() {
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = event => {
    setSearch(event.target.value);
    // setSearch(arr.filter(item => item.join('').toLowerCase().includes(search.toLowerCase())));
  };

  const onHandleSubmit = () => {
    setSearch("");
  };
  const toggleBurger = () => setActive(!active);
  return (
    <div className="App__container">
      <div className="App__container--wrapper">
        <nav>
          <ul className="App__menu">
            <li className="App__item">
              <div
                className={active ? "menu-burger active" : "menu-burger"}
                onClick={toggleBurger}
              >
                <div className="menu-burger__slice"></div>
                <div className="menu-burger__slice"></div>
                <div className="menu-burger__slice"></div>
              </div>
            </li>
            <li className="App__item">
              <Link to="/clients" className="App__link">
                Clients
              </Link>
            </li>
            <li className="App__item">
              <Link to="/news" className="App__link">
                News
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__logo">
          <Link to="/" className="App__link">
            some cool logo
          </Link>
        </div>
        <div className="header__search">
          <input
            type="text"
            placeholder=" "
            value={search}
            onChange={handleSearch}
          />
          <span onClick={onHandleSubmit}></span>
        </div>
      </div>
    </div>
  );
}
