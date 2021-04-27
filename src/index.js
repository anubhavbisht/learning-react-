import React from "react";
import ReactDOM from "react-dom";
import Greet from "./Greet.js";
import { Greet1 } from "./Greet.js";
import Meet from "./Meet.js";
import Props from "./Props.js";
import Pops from "./Pops.js";
const App = () => {
  return (
    <div>
      <h1>This is written in main App component</h1>
      <Greet />
      <Greet1 />
      <Meet />
      <Props name="Anubhav" age="23">
        <Greet />
      </Props>
      <Pops name="Anu" age="23">
        <Greet1 />
      </Pops>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
