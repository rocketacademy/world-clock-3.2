import logo from "/logo.png";
import "./App.css";
// import Clock component
import Clock from "./Clock.jsx";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Clock logo" />
      </div>
      <div className="App">
        <header className="App-header">
          <Clock timeZone="Asia/Hong_Kong" />
          <Clock timeZone="Europe/Oslo" />
          <Clock timeZone="America/Anchorage" />
          <Clock timeZone="Pacific/Kiritimati" />
        </header>
      </div>
    </>
  );
}

export default App;
