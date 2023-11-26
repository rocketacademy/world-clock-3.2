import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap-grid.css";
import Clock from "./Clock.jsx";

export default function WorldClock({ clockData }) {
  const listClockData = clockData.map((x) => {
    return (
      <Row key={x.city}>
        <Col>{x.city}</Col>
        <Col>
          <Clock timezone={x.timezone} />
        </Col>
      </Row>
    );
  });
  return (
    <>
      <Container fluid>{listClockData}</Container>
    </>
  );
}
// <Container fluid>
//   <Row>
//     <Col>Los Angeles</Col>
//     <Col>
//       <Clock timezone="America/Los_Angeles" />
//     </Col>
//   </Row>
//   <Row>
//     <Col>Chicago</Col>
//     <Col>
//       <Clock timezone="America/Chicago" />
//     </Col>
//   </Row>
//   <Row>
//     <Col>New York</Col>
//     <Col>
//       <Clock timezone="America/New_York" />
//     </Col>
//   </Row>
//   <Row>
//     <Col>London</Col>
//     <Col>
//       <Clock timezone="Europe/London" />
//     </Col>
//   </Row>
//   <Row>
//     <Col>Singapore</Col>
//     <Col>
//       <Clock timezone="Asia/Singapore" />
//     </Col>
//   </Row>
//   <Row>
//     <Col>Tokyo</Col>
//     <Col>
//       <Clock timezone="Asia/Tokyo" />
//     </Col>
//   </Row>
// </Container>
