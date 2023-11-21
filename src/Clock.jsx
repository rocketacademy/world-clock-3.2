import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Clock({timeZone}) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let ticking = setInterval(() => setDate(new Date()),1000)
    return () => clearInterval(ticking)
  }, [date]);
  return (
    <Row>
      <Col>{date.toLocaleString("en-US", { timeZone })} </Col> <Col>{timeZone}</Col>
    </Row>
  );
}