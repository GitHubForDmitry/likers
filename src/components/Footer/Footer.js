import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Likers } from "../../media/LIKERS.svg";
import { ReactComponent as Facebook } from "../../media/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../media/icons/instagram.svg";
import { ReactComponent as Youtube } from "../../media/icons/youtube.svg";
import { ReactComponent as Twitter } from "../../media/icons/twitter.svg";

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
      <hr />
      <div className="App__container">
          <div className="footer__wrapper">
              <div className="footer__copyright">© 2020 LIKERS Products, Inc.</div>
              <div className="footer__social">
                  <a className="App__social--link" href="#/">
                      <Facebook />
                  </a>
                  <a className="App__social--link" href="#/">
                      <Instagram />
                  </a>
                  <a className="App__social--link" href="#/">
                      <Youtube />
                  </a>
                  <a className="App__social--link" href="#/">
                      <Twitter />
                  </a>
              </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
