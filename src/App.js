import React from "react";
import "./App.css";
import Main from "./layouts";
import {observer} from "mobx-react";
import {observable} from "mobx";
import DevTools from "mobx-react-devtools";
class Data extends React.Component {

    render() {
        return (
            <div>
                <DevTools />
               <Main />
            </div>
        );
    }
};

function App() {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
