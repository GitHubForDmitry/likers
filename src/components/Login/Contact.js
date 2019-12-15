import React, { useState, useEffect } from "react";

const Contact = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState(1);
  const [textarea, setTextarea] = useState("");
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

  const handleChangeSelect = event => {
    const value = event.target.value;
    setSelect(value);
  };

  const handleChangeTextarea = event => {
    const value = event.target.value;
    setTextarea(value);
  };
  useEffect(() => {
    setDisabled(
      !(
        value.match(regEx) &&
        password.length > 5 &&
        +select > 1 &&
        textarea.length > 5
      )
    );
  }, [value, regEx, password.length, select, textarea]);
  return (
    <div className="App__container">
      <section className="login">
        <h1 className="login__title">Get in Touch</h1>
        <p className="login__text">
          We recommend you to check our FAQ section before submitting a contact
          request, as your query may have already been answered. If you are an
          existing member, please log in and submit a support ticket for a
          quicker response.
        </p>
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
            <label className="login__label" htmlFor="select">
              Reason for contacting us
            </label>
            <select
              onChange={handleChangeSelect}
              name="length"
              className="login__input"
              id="select"
            >
              <option value="1">- Please choose -</option>
              <option value="2">General Enquiry</option>
              <option value="3">Bug report</option>
              <option value="4">Partnership</option>
            </select>
          </div>
          <div className="login__wrapper--textarea">
            <label className="login__label" htmlFor="select">
              Your Message (English only)
            </label>
            <textarea
              onChange={handleChangeTextarea}
              className="login__input"
              placeholder="Write to us"
              name="textarea"
              id="textarea"
            ></textarea>
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
      </section>
    </div>
  );
};

export default Contact;
