import logo from "/logo.png";
import "./App.css";
import Clock from "./Clock.jsx";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <h1>World Clock</h1>
      <Clock timeZone="America/Los_Angeles" />
      <Clock timeZone="Europe/London" />
      <Clock timeZone="Asia/Singapore" />
    </>
  );
}

export default App;
