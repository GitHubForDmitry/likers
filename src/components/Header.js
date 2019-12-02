import React, { useState } from "react";
import {
    Link
} from "react-router-dom";

export default function Header() {
    const [active, setActive] = useState(false);

    const toggleBurger = () => setActive(!active);
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <div className={active ? "menu-burger active" : "menu-burger"} onClick={toggleBurger}>
                            <div className="menu-burger__slice"></div>
                            <div className="menu-burger__slice"></div>
                            <div className="menu-burger__slice"></div>
                        </div>
                    </li>
                    <li>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__logo">some cool logo</div>
            <div className="header__search">
                <input type="search"/>
            </div>
        </div>
    );
}
