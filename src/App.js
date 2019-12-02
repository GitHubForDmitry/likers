import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Clients from "./components/Clients";
import News from "./components/News";

function App() {
  return (
    <header className="App">
        <Router className="App__container">
            <Header className="App__header" />
            <Switch>
                <Route exact path="/clients" component={Clients}/>
                <Route path="/news" component={News}/>
            </Switch>
        </Router>
    </header>
  );
}

export default App;
