import React from "react";
import {Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import PasswordImg from "../../images/password2312.jpg";
import "./forgotPass.css";


function ForgotPass(props) {
return(
<div>
 <p><h3 id="createh3">Create new password:</h3></p>
 <Row>
 <Col xs={7} id="newPassCol">
 <Form>
  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="New password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row}>
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Confirm password" />
    </Col>
  </Form.Group>
  <Form.Check id="newCheck"
              type="checkbox"
              className="mb-2 mr-sm-2"
              label="Remember me"
            />
</Form>
<Button id="newPassBtn">Confirm</Button>
</Col>

<Col xs={5}>
          <img src={PasswordImg} id="passImg" class="img-fluid" />
        </Col>
        </Row>
</div>
);
}
export default ForgotPass;