import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import News from "./components/News/News";
import Person from "./components/Person";


function App() {

  return (
    <header className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/client/:number" component={Person} />
          <Route path="/news" component={News} />
        </Switch>
      </Router>
    </header>
  );
}

export default App;
