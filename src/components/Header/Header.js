import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Likers } from "../../media/LIKERS.svg";
import { ReactComponent as HomeIcon } from "../../media/icons/home.svg";
import { ReactComponent as ContactsIcon } from "../../media/icons/phone-contact.svg";

export default function Header() {
  const [active] = useState(false);

  return (
    <div>
        <div className="App__container">
          <div className="App__container--wrapper">
            <div className="header__logo">
              <Link to="/" className="App__link">
                <Likers />
              </Link>
            </div>
            <div className={active ? "App__sub-menu" : "display-none"}>
              <ul className="App__sub-menu__wrapper">
                <li className="App__sub-menu__item">
                  <Link className="App__sub-menu__link" to="/home">
                    <HomeIcon className="style-icon" /> Home
                  </Link>
                </li>
                <li className="App__sub-menu__item">
                  <Link className="App__sub-menu__link" to="/contacts">
                    <ContactsIcon className="style-icon" />
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="App__menu">
                <li className="App__item">
                  <Link to="/login" className="App__link">
                    Login
                  </Link>
                </li>
                <li className="App__item">
                  <Link to="/signup" className="App__link">
                    Sign in
                  </Link>
                </li>
                <li className="App__item">
                  <Link to="/contact" className="App__link">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <div className="navigation">
      <div className="App__container">
        <div className="App__container--wrapper">
          <nav className="header__profile">
            <ul className="header__profile--menu">
              <li className="header__profile--item">
                <Link className="header__profile--link" to="/">
                  twitter
                </Link>
              </li>
              <li className="header__profile--item">
                <Link className="header__profile--link" to="instagram">
                  instagram
                </Link>
              </li>
              <li className="header__profile--item">
                <Link className="header__profile--link" to="facebook">
                  facebook
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </div>

    </div>
  );
}
