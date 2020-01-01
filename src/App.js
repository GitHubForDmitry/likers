import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Contact from "./components/Auth/Contact";
import Facebook from "./components/Social/Facebook";
import Twitter from "./components/Social/Twitter";
import Instagram from "./components/Social/Instagram";
import Footer from "./components/Footer/Footer";
import firebase from "firebase";

const twitterColor = `rgba(29, 161, 292, 1)`;
const instagramColor = `rgba(230, 72, 84, 1)`;
const facebookColor = `rgba(45, 75, 138, 1)`;

const socialColors = [twitterColor, instagramColor, facebookColor];
 function App() {
  const initialState = () => window.localStorage.getItem('userName');
  const [userName, setUserName] = useState(initialState);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUserName(firebase.auth().currentUser.email);
                window.localStorage.setItem('userName', firebase.auth().currentUser.email)
                console.log(firebase.auth().currentUser)
            } else {
                console.log('user logout now')
            }
        });
    }, []);

    const [currentColor, setCurrentColor] = useState("#533737");

    const userLogin = () => {
        return <h1 style={{ fontSize: 55 }}>{userName}</h1>;
    };
  const changeColor = color => {
    setCurrentColor(color);
  };
  return (
    <div className="App">
      <Router>
        <header style={{ backgroundColor: currentColor }}>
          <Header color={socialColors} userLogin={userName && userName.substring(0, userName.lastIndexOf("@"))}/>
        </header>
        <Switch>
          <Route exact path="/test" component={userLogin} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route
            exact
            path="/"
            render={() => (
              <Twitter
                onClick={changeColor(twitterColor)}
                color={twitterColor}
              />
            )}
          />
          <Route
            path="/instagram"
            render={() => (
              <Instagram
                onClick={changeColor(instagramColor)}
                color={instagramColor}
              />
            )}
          />
          <Route
            path="/facebook"
            render={() => (
              <Facebook
                onClick={changeColor(facebookColor)}
                color={facebookColor}
              />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
