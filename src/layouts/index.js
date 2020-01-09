import React, { useEffect, useState, memo } from "react";
import firebase from "firebase";
import Header from "../components/Header/Header";
import { Route, Switch} from "react-router-dom";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Contact from "../components/Auth/Contact";
import Twitter from "../components/Social/Twitter";
import Instagram from "../components/Social/Instagram";
import Facebook from "../components/Social/Facebook";
import Footer from "../components/Footer/Footer";
import Pricing from "../components/Pricing";
import Features from "../components/Features";

const Main = memo(() => {
  const initialState = () => window.localStorage.getItem("userName");
  const twitterColor = `rgba(29, 161, 292, 1)`;
  const instagramColor = `rgba(230, 72, 84, 1)`;
  const facebookColor = `rgba(45, 75, 138, 1)`;
  const socialColors = [twitterColor, instagramColor, facebookColor];

  const [userName, setUserName] = useState(initialState);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUserName(firebase.auth().currentUser.email);
        window.localStorage.setItem(
          "userName",
          firebase.auth().currentUser.email
        );
      } else {
        console.log("user logout now");
      }
    });
  }, []);

  const [currentColor, setCurrentColor] = useState("#533737");

  const changeColor = color => {
    setCurrentColor(color);
  };
  return (
    <div className="App">
        <Header
          currentColor={currentColor}
          color={socialColors}
          userLogin={
            userName && userName.substring(0, userName.lastIndexOf("@"))
          }
        />
        <Features/>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/contact" component={Contact} />
        <Route
          exact
          path="/twitter"
          render={() => (
            <Twitter onClick={changeColor(twitterColor)} color={twitterColor} />
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
      <Pricing/>
      <Footer />
    </div>
  );
});
export default Main;
