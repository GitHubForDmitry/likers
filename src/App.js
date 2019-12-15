import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Contact from "./components/Login/Contact";
import Facebook from "./components/Social/Facebook";
import Twitter from "./components/Social/Twitter";
import Instagram from "./components/Social/Instagram";
import Footer from "./components/Footer/Footer";

const twitterColor = (opacity = 1) => `rgba(29, 161, 292, ${opacity})`;
const facebookColor = (opacity = 1) => `rgba(45, 75, 138, ${opacity})`;
const instagramColor = (opacity = 1) => `rgba(230, 72, 84, ${opacity})`;

function App() {
  const [currentColor, setCurrentColor] = useState('#533737');
  const changeColor = color => {
    setCurrentColor(color);
  };
  return (
    <div className="App">
      <Router>
        <header style={{backgroundColor: currentColor}}>
          <Header />
        </header>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
            <Route exact path="/" render={() => (
                <Twitter onClick={changeColor(twitterColor())} color={twitterColor}/>
            )} />
            <Route exact path="/instagram" render={() => (
                <Instagram onClick={changeColor(instagramColor())} color={instagramColor}/>
            )} />
            <Route exact path="/facebook" render={() => (
                <Facebook onClick={changeColor(facebookColor())} color={facebookColor}/>
            )} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
