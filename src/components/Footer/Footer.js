import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Likers } from "../../media/LIKERS.svg";

function Footer() {

  return (
    <footer className="footer">
      <div className="App__container">
        <div className="footer__wrapper">
          <Link to="/" className="App__link">
            <Likers />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
