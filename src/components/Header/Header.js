import React, { useState } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Likers} from "../../media/LIKERS.svg";
import {ReactComponent as HomeIcon} from "../../media/icons/home.svg";
import {ReactComponent as ContactsIcon} from "../../media/icons/phone-contact.svg";

// const arr = ['a', 'b', 'c'];
export default function Header() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);

  const toggleBurger = () => setActive(!active);
  const handleSearch = event => {
    setSearch(event.target.value);
    // setSearch(arr.filter(item => item.join('').toLowerCase().includes(search.toLowerCase())));
  };

  const onHandleSubmit = () => {
    setSearch("");
  };
  return (
    <div className="App__container">
      <header className="App__container--wrapper">
        <nav className={active ? "App__sub-menu" : "display-none" }>
          <ul className="App__sub-menu__wrapper">
            <li className="App__sub-menu__item">
              <Link className="App__sub-menu__link" to="/home">
                <HomeIcon className="style-icon" /> Home
              </Link>
            </li>
            <li className="App__sub-menu__item">
              <Link className="App__sub-menu__link" to="/contacts">
                <ContactsIcon  className="style-icon" />
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
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
              <Link to="/client/01" className="App__link">
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
            <Likers />
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
      </header>
    </div>
  );
}
