import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import date from "date-and-time";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// function today() {
//   const now = new Date();
//   const element = (
//     <div>
//       <h1> IFFAH'S CLOCK</h1>
//       <h2>It is {date.format(now, "DD/MM/YYYY HH:mm:ss")}.</h2>
//     </div>
//   );
//   console.log("today");
//   root.render(element);
// }

// setInterval(today, 1000);
