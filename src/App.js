import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Clients from "./components/Clients";
import News from "./components/News";
import { ReactComponent as Facebook } from "./media/icons/facebook.svg"
import { ReactComponent as Twitter } from "./media/icons/twitter.svg"
import { ReactComponent as Instagram } from "./media/icons/instagram.svg"
import { ReactComponent as Youtube } from "./media/icons/youtube.svg"

function App() {
  return (
    <header className="App">
        <div className="App__decoration-block"></div>
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/clients" component={Clients}/>
            <Route path="/news" component={News}/>
        </Switch>
    </Router>
        <div className="App__container">
            <div className="App__social">
                <a className="App__social--link" href="#/">
                    <Facebook />
                </a>
                <a className="App__social--link" href="#/">
                    <Instagram/>
                </a>
                <a className="App__social--link" href="#/">
                    <Youtube/>
                </a>
                <a className="App__social--link" href="#/">
                    <Twitter/>
                </a>
                <div className="App__list">
                    <div className="App__list--line"></div>
                    <div className="App__list--number">02</div>
                </div>
            </div>
            <div className="App__person">
                <div className="App__person--wrapper">
                    <h1 className="App__person--name">
                        Georgina
                    </h1>
                    <h1 className="App__person--name">
                        Alson
                    </h1>
                    <div className="App__person--profession">
                        young model 2020
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default App;
