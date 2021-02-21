import React from "react";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import waterfall from "../../images/waterfall.jpg";
import "./createAccount.css";

function CreateAccount(props) {
  return (
    <div>
      <Row>
        <Col xs={7}>
            <h3 id="welcomeHeadline" style={{margin:"20px"}}>Thank you for joining our community!</h3>
            <div id="divCreate">
          <Form id="createForm">
            <Row style={{margin:"20px"}}>
            <Col>
              <Form.Control placeholder="First Name" id="nameInputB" />
              <Form.Control placeholder="Last Name" id="nameInputC"/>
            </Col>
           </Row>
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
              id="inlineFormCheck"
              label="Remember me"
            />
            <Button type="submit" className="mb-2" id="createButt">
              Create account
            </Button>
          </Form>
          </div>
        </Col>

        <Col xs={5}>
          <img src={waterfall} id="waterfallImg" class="img-fluid" />
        </Col>
      </Row>
    </div>
  );
}
export default CreateAccount;
