import * as React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Grid } from "./components/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: "50px", width: "50px" }}
        />
        <Counter />
        <p>Welcome to Mia's tetris :)</p>
        <Grid width={10} height={20} />
      </header>
    </div>
  );
}

export default App;
