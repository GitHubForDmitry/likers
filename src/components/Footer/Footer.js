import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Likers } from "../../media/LIKERS.svg";
import { ReactComponent as Facebook } from "../../media/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../media/icons/instagram.svg";
import { ReactComponent as Youtube } from "../../media/icons/youtube.svg";
import { ReactComponent as Twitter } from "../../media/icons/twitter.svg";
import { ReactComponent as Envelope } from "../../media/icons/envelope.svg";

function Footer(props) {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(value);
    if (value.match(regEx)) {
      resetForm();
      setDisabled(true);
      return true;
    }
  };

  const resetForm = () => {
    setValue("");
  };

  const handleChange = event => {
    const value = event.target.value;
    setValue(value);
    setDisabled(!value.match(regEx));
  };
  return (
    <footer className="footer">
      <div className="App__container">
        <div className="footer__wrapper">
          <Link to="/" className="App__link">
            <Likers />
          </Link>
          <form className="footer__email-form">
            <div className="footer__email-form--wrapper">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Sign up our newsletter"
                required
                value={value}
                formNoValidate={false}
              />
            </div>
            <button
              type="button"
              className={
                disabled
                  ? "footer__button footer__button--disabled"
                  : "footer__button footer__button--enable"
              }
              onClick={handleSubmit}
              disabled={disabled}
            >
              {"Send"}
              <Envelope
                style={
                  disabled
                    ? {
                        width: 23,
                        height: 16,
                        fill: "grey",
                        paddingLeft: ".75rem"
                      }
                    : {
                        width: 23,
                        height: 16,
                        fill: "#fff",
                        paddingLeft: ".75rem"
                      }
                }
              />
            </button>
          </form>
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
