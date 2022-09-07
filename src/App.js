import "./App.css";
import React from "react";
import SearchModule from "./SearchModule";
import SourseCode from "./SourseCode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SearchModule />
          <SourseCode/>
        </div>
      </header>
    </div>
  );
}

export default App;
