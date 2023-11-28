import logo from "/logo.png";
import "./App.css";
import WorldClock from "./WorldClock.jsx";
import React from "react";

const clockData = [
  { city: "Los Angeles", timezone: "America/Los_Angeles" },
  { city: "Chicago", timezone: "America/Chicago" },
  { city: "New York", timezone: "America/New_York" },
  { city: "London", timezone: "Europe/London" },
  { city: "Singapore", timezone: "Asia/Singapore" },
  { city: "Tokyo", timezone: "Asia/Tokyo" },
];

export default function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <h1>World Clock</h1>
      <div className="card">
        {/* Render date value that is stored in state */}
        <WorldClock clockData={clockData} />
      </div>
    </>
  );
}
