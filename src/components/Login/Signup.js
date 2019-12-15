import React, { useState, useEffect } from "react";

const Signup = () => {
  const [nameValue, setNameValue] = useState("");
  const [value, setValue] = useState(true);
  const [password, setPassword] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState(true);
  const [disabled, setDisabled] = useState(true);
  let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = event => {
    event.preventDefault();
    setDisabled(true);
    setValue("");
    setPassword("");
    return true;
  };

  const handleChangeName = event => {
    const val = event.target.value;
    setNameValue(val);
  };

  const handleChange = event => {
    const val = event.target.value;
    setValue(val);
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
    setDisabled(!(
        (nameValue.length > 2) &&
        (value.length > 0 && value.match(regEx)) &&
        (password.length > 5) &&
        (passwordConfirm.length > 5) &&
         (password === passwordConfirm && password.length > 0 && password.length > 0 &&password.length === passwordConfirm.length)
    ))
  }, [value, regEx, password.length, password, passwordConfirm, nameValue]);
  return (
    <div className="App__container">
      <div className="login">
        <h1 className="login__title">Sign Up</h1>
        <form className="login__form">
          <div className="login__wrapper">
            <label className="login__label" htmlFor="name">
              Your name
            </label>
            <input
              className="login__input"
              type="text"
              name="name"
              id="name"
              onChange={handleChangeName}
            />
          </div>
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
            <label className="login__label"/>
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
      </div>
    </div>
  );
};

export default Signup;
