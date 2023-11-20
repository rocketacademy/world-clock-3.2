import logo from "/logo.png";
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
        <p>{new Date().toString()}</p>
      </div>
    </>
  );
}

export default App;
