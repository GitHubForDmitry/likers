import React, { useState, useEffect } from "react";
import firebase from '../../firebase/firebase';

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setErrorState] = useState("");
  let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = event => {
    event.preventDefault();
    setDisabled(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            setErrorState("userExist");
          }
          console.log(user);
          return false;
        })
      )
      .catch(error => {
        // Handle Errors here.
        let errorCode = error.code;
        console.log(errorCode);
        switch (errorCode) {
          case "auth/invalid-email":
            return setErrorState("The email address is badly formatted.");
          case "auth/wrong-password":
            return setErrorState("The password is invalid");
          case "auth/user-not-found":
            return setErrorState("There is no such user");
          default:
            return setErrorState("error");
        }
      });
  };

  const handleChange = event => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleChangePass = event => {
    const value = event.target.value;
    setPassword(value);
  };

  useEffect(() => {
    setDisabled(!(email.match(regEx) && password.length > 5));
  }, [email, regEx, password.length]);
  return (
    <div className="App__container">
      <div className="login">
        <h1 className="login__title">Log in</h1>
        <form className="login__form">
          <div className="login__wrapper">
            <label className="login__label" htmlFor="email">
              Email address
            </label>
            <input
              className="login__input"
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="login__wrapper">
            <label className="login__label" htmlFor="password">
              Password
            </label>
            <input
              className="login__input"
              type="password"
              name="password"
              id="password"
              onChange={handleChangePass}
            />
          </div>
          <div className="login__wrapper">
            <label className="login__label"></label>
            <button
              type="submit"
              className={
                disabled ? "login__button--disable" : "login__button--enable"
              }
              onClick={handleSubmit}
              disabled={disabled}
            >
              login
            </button>
            <p>{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
