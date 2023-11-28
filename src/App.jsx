import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import Clock from "./Clock";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <h1>World Clock</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          <p>Timezone: Asia/Singapore</p>
          <Clock timeZone="Asia/Singapore" />
          <p>Timezone: Europe/London</p>
          <Clock timeZone="Europe/London" />
        </p>
      </div>
    </>
  );
}

export default App;
