import logo from "/logo.png";
import "./App.css";
// import Clock from "./Clock.jsx";

// function App() {
//   return (
//     <>
//       <div>
//         <img src={logo} className="logo" alt="Rocket logo" />
//       </div>
//       <h1>World Clock</h1>
//       <Clock timeZone="America/Los_Angeles" />
//       <Clock timeZone="Europe/London" />
//       <Clock timeZone="Asia/Singapore" />
//     </>
//   );
// }

// export default App;

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Render date value that is stored in state */}
        <p>{date.toString()}</p>
      </header>
    </div>
  );
}
