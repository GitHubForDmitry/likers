import React, { useState, useEffect } from "react";
import { Link, Route, Switch, useLocation  } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ReactComponent as Likers } from "../../media/LIKERS.svg";
import { ReactComponent as Mail } from "../../media/icons/envelope.svg";

import firebase from "../../firebase/firebase";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Rocket from '../../media/rocket.png';
import Instagram from '../../media/instagram.png';

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(-270deg,#27acbd,#5a64af,#a93f7f)",
    width: "100%",
    height: "calc(100vh - 150px)"
  },
  heroContent: {
    display: "flex",
    alignItems: "start",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    paddingTop: "10vh",
    height: "calc(100vh - 150px)",
    textAlign: "center"
  },
  h1: {
    color: "#fff"
  },
  card: {
    maxWidth: 4345,
  },
  media: {
    height: 140,
    width: 440
  },
  main: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  mainWrapper: {
    display: "flex",
    alignItems: "center",
     width: "100%",
    justifyContent: "space-between",
  },
  mainWrapperImg: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  }
}));

const Header = ({ color, currentColor }, props) => {
  const classes = useStyles();
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
                {/*<li className="App__item">*/}
                {/*  <Link to="/login" className="App__link">*/}
                {/*    login*/}
                {/*  </Link>*/}
                {/*</li>*/}
                {/*<li className="App__item">*/}
                {/*  <Link to="/signup" className="App__link">*/}
                {/*    signup*/}
                {/*  </Link>*/}
                {/*</li>*/}
                {/*<li className="App__item">*/}
                {/*  <Link to="/contact" className="App__link">*/}
                {/*    contact*/}
                {/*  </Link>*/}
                {/*</li>*/}
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
      <CssBaseline />
      <Container maxWidth="lg" component="main" className={classes.heroContent}>
        <div className={classes.mainWrapper}>
        <div className={classes.main}>
          <Typography component="h2" variant="h2" gutterBottom className={classes.h1}>
            Welcome to
          </Typography>
          <Typography component="h2" variant="h2" gutterBottom className={classes.h1}>
            LIKERS
          </Typography>
        </div>
          <img style={{width: "20vw", height: "auto"}} src={Instagram}  alt="like" className={classes.main}/>
        </div>
        <div className={classes.mainWrapperImg}>
        <img style={{width: "auto", height: 200}} src={Rocket}  alt="like" className={classes.main}/>
        </div>
      </Container>

    </>
  );
};
export default Header;
