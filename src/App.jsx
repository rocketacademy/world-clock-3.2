import logo from "/logo.png";
import "./App.css";
// import Clock from "./Clock";
// import Container from "react-bootstrap/Container";
import Timezone from "./Timezones";
// import { useEffect } from "react";

// question: How to get access to data of Timezone's Dropdown.Item clicks from App, so that I can use it to do 2 things:
//  1) Send the information as props to Clock
// 2) Use this action of clicking on the Dropdown.Item to add a clock.
// question: I am not sure if I should useEffect or useState

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <h1>World Clock</h1>

      <Timezone />
    </>
  );
}
export default App;
