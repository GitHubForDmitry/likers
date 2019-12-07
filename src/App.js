import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clients from "./components/Clients";
import News from "./components/News";
import Person from "./components/Person";
import clientsAPI from "./data/clients";

console.log(
  clientsAPI.all().map(client => `${client.name} ${client.profession}`)
);


function App() {
  return (
    <header className="App">
      <div className="App__decoration-block"></div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/clients" component={Clients} />
          <Route path="/news" component={News} />
        </Switch>
      </Router>
      <Router>
      <Switch>
          <Route path='/client/:number' component={Person}/>
      </Switch>
      </Router>
    </header>
  );
}

export default App;
