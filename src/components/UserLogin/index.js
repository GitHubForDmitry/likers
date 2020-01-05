import React from 'react';
import {Link} from "react-router-dom";

const UserLogin = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/user"> twitter </Link>
                    <Link to="/user/facebook"> facebook </Link>
                    <Link to="/user/instagram"> instagram </Link>
                </li>
            </ul>
        </nav>
    );
}

export default UserLogin;