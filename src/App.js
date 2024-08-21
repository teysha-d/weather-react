import React from "react";
import Weather from "./Weather";
import Loader from "react-loader-spinner";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>👋🏾 Hello World</h1>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
