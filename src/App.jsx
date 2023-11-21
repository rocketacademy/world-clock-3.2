import "./App.css";
import { useState, useEffect } from "react";
import Clock from "./Clock.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image.js";

export default function App() {
  return (
    <>
      <h1>World Clock</h1>
      <div className="card">
        <Container>
          <Row>
            <Col>
              <p class="text-primary">Country</p>
            </Col>
            <Col>
              <p class="text-warning">Local Time</p>
            </Col>
          </Row>
          <Col>
            <Row>
              <Col>
                <Clock timeZone="Singapore" />
              </Col>
            </Row>
            <Row>
              <Clock timeZone="Egypt" />
            </Row>
            <Row>
              <Clock timeZone="Australia/Sydney" />
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
}
