import React, { useState, useEffect } from "react";
import { Link, Route, Switch, useLocation  } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ReactComponent as Likers } from "../../media/LIKERS.svg";
import { ReactComponent as Mail } from "../../media/icons/envelope.svg";
import { ReactComponent as Login } from "../../media/icons/login.svg";
import { ReactComponent as Signup } from "../../media/icons/signup.svg";
import { ReactComponent as Facebook } from "../../media/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../media/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../media/icons/twitter.svg";
import firebase from "../../firebase/firebase";
import UserLogin from "../UserLogin";
import UserTwitter from "../UserLogin/UserTwitter";

const Header = ({ color, currentColor }, props) => {
  let history = useHistory();
  const localStorage = window.localStorage;
  const [userEmail, setUserEmail] = useState("");
  const emailVerified = localStorage.getItem("emailVerified");
  const logout = async () => {
    await localStorage.removeItem("userName");
    await localStorage.removeItem("emailForSignIn");
    await localStorage.removeItem("emailVerified");
    await history.push("/");
  };

  const refreshPage = async () => {
    await window.location.reload();
    await props.history.push("/user");
  };

  const handleChange = () => {
    firebase
      .auth()
      .signOut()
      .then(logout)
      .catch(function(error) {
        console.log(error.message);
      });
  };
  const initialState = () => localStorage.getItem("userName");
  const [userName, setUserName] = useState(initialState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUserName(firebase.auth().currentUser.email);
        localStorage.setItem("userName", firebase.auth().currentUser.email);
        localStorage.setItem(
          "emailVerified",
          firebase.auth().currentUser.emailVerified
        );
        setUserEmail(firebase.auth().currentUser.emailVerified);
      } else {
        setUserName("");
      }
    });
  }, [emailVerified, localStorage]);

  const btn = <button onClick={handleChange}>sign out</button>;
  return (
    <>
      <header className="header" >
        <div className="App__container">
          <div className="App__container--wrapper">
            <div className="header__logo">
              {emailVerified ? (
                <Link to="/user" className="App__link">
                  {" "}
                  <Likers />
                </Link>
              ) : (
                <Link to="/" className="App__link">
                  {" "}
                  <Likers />
                </Link>
              )}
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
                  <a href="#features" className="App__link">
                    Features
                  </a>
                </li>
                <li className="App__item">
                  <a href="#pricing" className="App__link">
                    Pricing
                  </a>
                </li>
                <li className="App__item">
                  <Link to="/login" className="App__link">
                    login
                  </Link>
                </li>
                <li className="App__item">
                  <Link to="/signup" className="App__link">
                    signup
                  </Link>
                </li>
                <li className="App__item">
                  <Link to="/contact" className="App__link">
                    contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="App__container">
          {userName ? (
            userEmail ? (
              ""
            ) : (
              <p>
                please, verified your email and{" "}
                <button onClick={refreshPage}>refresh page</button>
              </p>
            )
          ) : (
            " "
          )}
        </div>
      </header>

      {userName ? (
        <div className="wrapper-user-login">
          <UserLogin />
          <Switch>
            <Route path="/user" component={UserTwitter} />
          </Switch>
        </div>
      ) : (
        <div className="navigation">
          <div className="App__container">
            <div className="App__container--wrapper">
              <nav className="header__profile">
                <ul className="header__profile--menu">
                  <li className="header__profile--item">
                    <Link className="header__profile--link" to="/twitter">
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
      )}
    </>
  );
};
export default Header;
