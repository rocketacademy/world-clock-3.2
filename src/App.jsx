import logo from "/logo.png";
import "./App.css";
import WorldClock from "./WorldClock";

// const country = ["Asia/Singapore", "Asia/Tokyo", "Europe/Zurich"];

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>
      <WorldClock />
    </>
  );
}

export default App;
