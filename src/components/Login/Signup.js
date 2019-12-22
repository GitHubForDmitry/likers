import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";

const Signup = () => {
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState(true);
  let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = event => {
    event.preventDefault();
    setDisabled(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // var errorCode = error.code;
        // var errorMessage = error.message;
      })
      .then(
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            setMessage("Thanks for registration, please login");
          } else {
            setMessage("error");
          }
        })
      );
  };

  const handleChange = event => {
    const val = event.target.value;
    setEmail(val);
  };

  const handleChangePassword = event => {
    const val = event.target.value;
    setPassword(val);
  };

  const handleChangePasswordConfirm = event => {
    const val = event.target.value;
    setPasswordConfirm(val);
  };
  useEffect(() => {
    setDisabled(
      !(
        email.length > 0 &&
        email.match(regEx) &&
        password.length > 5 &&
        passwordConfirm.length > 5 &&
        password === passwordConfirm &&
        password.length > 0 &&
        password.length > 0 &&
        password.length === passwordConfirm.length
      )
    );
  }, [email, regEx, password.length, password, passwordConfirm]);
  return (
    <div className="App__container">
      <div className="login">
        <h1 className="login__title">Sign Up</h1>
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
              Create password
            </label>
            <input
              className="login__input"
              type="password"
              name="password"
              id="password"
              onChange={handleChangePassword}
            />
          </div>
          <div className="login__wrapper">
            <label className="login__label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className="login__input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChangePasswordConfirm}
            />
          </div>
          <div className="login__wrapper">
            <label className="login__label" />
            <button
              type="submit"
              className={
                disabled ? "login__button--disable" : "login__button--enable"
              }
              onClick={handleSubmit}
              disabled={disabled}
            >
              sign in
            </button>
          </div>
        </form>
        <p style={{ color: "green" }}>{message}</p>
      </div>
    </div>
  );
};

export default Signup;
