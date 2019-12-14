import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/News/News";
import Person from "./components/Person";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/client/:number" component={Person} />
          <Route path="/news" component={News} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
