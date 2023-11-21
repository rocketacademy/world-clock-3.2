import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { clockData } from "./clockData";

function WorldClock() {
  const listItems = clockData.map((data, index) => (
    <Row key={index}>
      <Col>{data.city}</Col>
      <Col>
        <Clock timeZone={data.time} />
      </Col>
    </Row>
  ));

  return (
    <>
      <h1> World Clock</h1>
      <Container>{listItems}</Container>
    </>
  );
}
export default WorldClock;
