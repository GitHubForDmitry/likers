import React from "react";
import "./App.css";
import Main from "./layouts";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import Stores from './stores';

function App() {
  return (
      <Provider {...Stores()}>
      <Router>
          <Main />
      </Router>
    </Provider>
  );
}

export default App;
