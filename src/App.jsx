import logo from "/logo.png";
import "./App.css";
import Clock from "./Clock.jsx";

export default function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <h1>World Clock</h1>
      <div className="card">
        <Clock timeZone="Asia/Singapore" />
        <Clock timeZone="America/New_York" />
        <Clock timeZone="Asia/Shanghai" />
      </div>
    </>
  );
}
