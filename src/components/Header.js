import React from 'react';
import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__wrapper">
                    <div className="header__nav">
                        <ul className="header__menu">
                            <li className="header__item">
                                <Link to="/" className="header__link" href="/">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/clients" className="header__link" href="/clients">
                                    clients
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/news" className="header__link" href="/news">
                                    news
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__logo">some cool logo</div>
                    <div className="header__search">
                        <input type="search"></input> 
                    </div>
                </div>
            </div>
        </div>  

    )
}

export default Header;