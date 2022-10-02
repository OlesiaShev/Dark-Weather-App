import "./App.css";
import React from "react";
import SearchModule from "./SearchModule";
import { useGlobalState } from "./state/index.js";


function App()
{
  let city = useGlobalState("globalCity");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SearchModule city={city } />
          
        </div>
      </header>
    </div>
  );
}

export default App;
