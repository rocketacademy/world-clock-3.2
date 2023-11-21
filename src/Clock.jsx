import logo from "/logo.png";
import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Clock(props) {
  const [date, setDate] = useState(new Date());
  console.log(props);

  useEffect(() => {
    //Implementing the setInterval
    const interval = setInterval(() => {
      setDate(date + 1);
    }, 1000);

    //clearing the interval
    return () => clearInterval(interval);
  }, [date]);

  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <h3> {props.timeZone} </h3>
        </Col>
        <Col>
          {" "}
          {new Date().toLocaleString("en-GB", {
            timeZone: `${props.timeZone}`,
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Clock;
