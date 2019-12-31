import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";
import useDebounce from "../../debounce/debounce";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorUser, setErrorUser] = useState(false);
  const message = {
    email: "email is not a valid",
    password: "password cannot be less than 6 characters"
  };
  let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const login = () =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
         () => {
           props.history.push("/test");
        })
      .catch(error => {
        // Handle Errors here.
        let errorCode = error.code;
        console.log(errorCode);
        switch (errorCode) {
          case "auth/invalid-email":
            return setErrorUser("The email address is badly formatted.");
          case "auth/wrong-password":
            return setErrorUser("The password is invalid");
          case "auth/user-not-found":
            return setErrorUser("There is no such user");
          default:
            return setErrorUser("error");
        }
      });
  const handleSubmit = event => {
    event.preventDefault();
    setDisabled(true);
    login();
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

  const debouncedEmail = useDebounce(email, 1500);
  const debouncedPassword = useDebounce(password, 1500);
  useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedEmail) {
      // Set isSearching state
      setErrorEmail(message.email);
      if (email.match(regEx)) {
        setErrorEmail("");
      }
    }
    if (debouncedPassword) {
      setErrorPassword(message.password);
      if (password.length > 5) {
        setErrorPassword("");
      }
    }
  }, [
    debouncedEmail,
    debouncedPassword,
    email,
    message.email,
    message.password,
    password.length,
    regEx
  ]);
  return (
    <div className="App__container">
      <div className="login">
        <h1 className="login__title">Log in</h1>
        <form className="login__form">
          <div className="login__wrapper">
            <label className="login__label" htmlFor="email">
              Email address
            </label>
            <div className="login__wrapper--input">
              <input
                className="login__input"
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
              />
              <p className="login__error">{errorEmail}</p>
            </div>
          </div>
          <div className="login__wrapper">
            <label className="login__label" htmlFor="password">
              Password
            </label>
            <div className="login__wrapper--input">
              <input
                className="login__input"
                type="password"
                name="password"
                id="password"
                onChange={handleChangePass}
              />
              <p className="login__error">{errorPassword}</p>
            </div>
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
          </div>
          <div className="login__wrapper">
            <label className="login__label"></label>
            <p className="login__error">{errorUser}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
