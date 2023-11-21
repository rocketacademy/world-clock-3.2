import logo from "/logo.png";
import "./App.css";
import { useState, useEffect } from "react";
import Clock from "./Clock.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    //Implementing the setInterval
    const interval = setInterval(() => {
      setDate(date + 1);
    }, 1000);

    //clearing the interval
    return () => clearInterval(interval);
  }, [date]);

  return (
    <>
      <div>
        <div>
          <img src={logo} className="logo" alt="Rocket logo" />
        </div>
        <h1>World Clock</h1>
        <Container>
          <Row>
            <Col> City </Col>
            <Col> Date/ Time </Col>
          </Row>
        </Container>
        <div className="card">
          <Clock timeZone="Asia/Singapore" />
          <Clock timeZone="Europe/London" />
          <Clock timeZone="America/Los_Angeles" />
        </div>
      </div>
    </>
  );
}

export default App;
