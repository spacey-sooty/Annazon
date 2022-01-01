import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "./Pages/homePage.component";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Hello world!</h2>
        {/* <Route path="/home" exact component={HomePage}/> */}
      </div>
    </Router>
  );
}

export default App;
