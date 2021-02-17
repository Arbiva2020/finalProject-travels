import React from "react";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import welcome from "../../images/lo.jpg";
import "./createAccount.css";

function CreateAccount(props) {
  return (
    <div>
      <Row>
        <Col xs={7}>
            <h3 id="welcomeHeadline">Thank you for joining our community!</h3>
          <Form id="createForm">
            <Col>
              <Form.Control placeholder="First Name" id="nameInputB" />
            </Col>
            <Col>
              <Form.Control placeholder="Last Name" id="nameInputC"/>
            </Col>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                <h6>Email:</h6>
              </Form.Label>
              <Col xs={7}>
                <Form.Control plaintext defaultValue="email@example.com" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col xs={7}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Confirm password
              </Form.Label>
              <Col xs={7}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Check
              type="checkbox"
              className="mb-2 mr-sm-2"
              id="inlineFormCheck"
              label="Remember me"
            />
            <Button type="submit" className="mb-2" id="createButt">
              Create account
            </Button>
          </Form>
        </Col>

        <Col xs={5}>
          <img src={welcome} id="welcomeImg" class="img-fluid" />
        </Col>
      </Row>
    </div>
  );
}
export default CreateAccount;
