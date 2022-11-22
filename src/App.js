import React from 'react';
import "./styles.css";
import SideBar from './components/SideBar';

export default function App() {
  return (
    <div className="App">
      <h1 className="header-title"> This is my dashboard </h1>

      <div className="row">
        <div className="col-4">
          <SideBar/>
        </div>

        <div className="col-8">{/* main area */}</div>
      </div>
    </div>
  );
}
