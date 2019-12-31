import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ReactComponent as Likers } from "../../media/LIKERS.svg";
import { ReactComponent as Mail } from "../../media/icons/envelope.svg";
import { ReactComponent as Login } from "../../media/icons/login.svg";
import { ReactComponent as Signup } from "../../media/icons/signup.svg";
import { ReactComponent as Facebook } from "../../media/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../media/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../media/icons/twitter.svg";
import firebase from "../../firebase/firebase";

const Header = ({ color, userLogin }) => {
  let history = useHistory();
  const logout = async () => {
    await window.localStorage.removeItem("userName");
    await window.localStorage.removeItem("emailForSignIn");
    await history.push("/");
  };
  const handleChange = () => {
    firebase
      .auth()
      .signOut()
      .then(logout)
      .catch(function(error) {
        console.log(error);
      });
    console.log(userLogin);
  };
  const initialState = () => window.localStorage.getItem('userName');
  const [userName, setUserName] = useState(initialState);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUserName(firebase.auth().currentUser.email);
        window.localStorage.setItem('userName', firebase.auth().currentUser.email)
        console.log('user in')
      } else {
        console.log('user logout now')
        setUserName('');
      }
    });
  }, []);
  const btn = <button onClick={handleChange}>sign out</button>;
  return (
    <>
      <div className="App__container">
        <div className="App__container--wrapper">
          <div className="header__logo">
            <Link to="/" className="App__link">
              <Likers />
            </Link>
          </div>
          {userName ? (
            <ul className="App__menu">
              <li className="App__item">
                <h1>{userName}</h1>
              </li>
              <li className="App__item">{btn}</li>
              <li className="App__item">
                <Link to="/contact" className="App__link">
                  <Mail className="style-icon" />
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="App__menu">
              <li className="App__item">
                <Link to="/login" className="App__link">
                  <Login className="style-icon" />
                </Link>
              </li>
              <li className="App__item">
                <Link to="/signup" className="App__link">
                  <Signup className="style-icon" />
                </Link>
              </li>
              <li className="App__item">
                <Link to="/contact" className="App__link">
                  <Mail className="style-icon" />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="navigation">
        <div className="App__container">
          <div className="App__container--wrapper">
            <nav className="header__profile">
              <ul className="header__profile--menu">
                <li className="header__profile--item">
                  <Link className="header__profile--link" to="/">
                    <Twitter
                      style={{ fill: color[0], width: 60, height: 60 }}
                    />
                  </Link>
                </li>
                <li className="header__profile--item">
                  <Link className="header__profile--link" to="instagram">
                    <Instagram
                      style={{ fill: color[1], width: 60, height: 60 }}
                    />
                  </Link>
                </li>
                <li className="header__profile--item">
                  <Link className="header__profile--link" to="facebook">
                    <Facebook
                      style={{ fill: color[2], width: 60, height: 60 }}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
