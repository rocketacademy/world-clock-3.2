import logo from "/logo.png";
import "./App.css";
import Clock from "./components/Clock";
import Food from "./components/Food"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Rocket logo" />
      </div>

      <Container>
        <Row>
          <Col xs>Country</Col>
          <Col xs>Time Zone</Col>
        </Row>
        <Row>
          <Col xs>Singapore</Col>
          <Col xs>
            <Clock title="Singapore" />
          </Col>
        </Row>
        <Row>
          <Col xs>Los Angeles</Col>
          <Col xs>
            <Clock title="Los Angeles" />
          </Col>
        </Row>
        <Row>
          <Col xs>London</Col>
          <Col xs>
            <Clock title="London" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;