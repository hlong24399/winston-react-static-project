import React from 'react';
import "./styles.css";
import sideBar from "./components/sideBar.js";

export default function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-4">
          <sideBar/>
        </div>

        <div className="col-8">{/* main area */}</div>
      </div>
    </div>
  );
}
