import React from "react";
import { Card, Button, Col, Form, Row, Nav } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import deer from "../../images/3733725672.jpg";
import "./logIn.css";

function LogIn(props) {
  return (
    <div>
      <Row>
        <Col xs={7} id="logInCol">
          <Form id="logInForm">
            <p>
              <h3 id="h3login">Log In:</h3>
            </p>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                <h6 className="formInput">Email:</h6>
              </Form.Label>
              <Col xs={7}>
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue="email@example.com"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                <h6 className="formInput">Password:</h6>
              </Form.Label>
              <Col xs={7}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <div id="forgot">
              <Row>
                {/* <LinkContainer to='/forgotPass'><Nav.Link style={{color: "black"}}>forgot password?</Nav.Link></LinkContainer> */}
                <Nav.Link
                  id="navForgot"
                  style={{ color: "gray" }}
                  href="/forgotPass"
                >
                  forgot password?
                </Nav.Link>
                <Nav.Link href="/createAccount" style={{ color: "gray" }}>
                  Create New Account
                </Nav.Link>
              </Row>
            </div>

<div>
          <Row>
            <Col xs={7} style={{ margin: "20px" }}>
              <Form.Check
                id="logCheck"
                type="checkbox"
                className="mb-2 mr-sm-2"
                label="Remember me"
              />
            </Col>
            </Row>
            </div>

            <Button
              variant="secondary"
              type="submit"
              className="mb-2"
              style={{ margin: "20px" }}
            >
              Log in
            </Button>
          </Form>
        </Col>

        <Col xs={5}>
          <img src={deer} id="deerLog" class="img-fluid" />
        </Col>
      </Row>
    </div>
  );
}
export default LogIn;
