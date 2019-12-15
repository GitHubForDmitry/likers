import React, { useState, useEffect } from "react";

const Login = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = event => {
    event.preventDefault();
    setDisabled(true);
    setValue("");
    setPassword("");
    console.log(value);
    console.log(password);
    return true;
  };

  const handleChange = event => {
    const value = event.target.value;
    setValue(value);
  };
  const handleChangePass = event => {
    const value = event.target.value;
    setPassword(value);
  };

  useEffect(() => {
    setDisabled(!(value.match(regEx) && password.length > 5));
  }, [value, regEx, password.length]);
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
