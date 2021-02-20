import React from "react";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import mailImg from "../../images/6a2b622b2030c6aeeec62c015dac1f5f.jpg";
import "./mailMe.css";

function MailMe(props) {
  return (
    <div>
      <h3 id="mailMeh3">Thank you for choosing us!</h3>
      <h5 id="mailMeh5">We guarantee minimum updates necessary</h5>
      <Row>
        <Col xs={7}>
          <Form id="keepMePosted">
            <Form.Row>
              <Col xs={3}>
                <Form.Control as="select" className="mr-sm-2" custom>
                  <option value="0">Honorific</option>
                  <option value="1">Mr.</option>
                  <option value="2">Miss.</option>
                  <option value="3">Mrs.</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="First Name" id="" />
              </Col>
              <Col>
                <Form.Control placeholder="Last Name" />
              </Col>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control placeholder="05X-XXXXXXX" />
              <Form.Label></Form.Label>
              <Form.Control placeholder="Adress" />
            </Form.Group>

            <Form.Row>
              <Col xs={7}>
                <Form.Control placeholder="City" />
              </Col>
              <Col>
                <Form.Control placeholder="State" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" />
              </Col>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Button id="postedButt">Keep me posted!</Button>
          </Form>
        </Col>

        <Col xs={5}>
          <Card className="mailMeCard">
            <Card.Img src={mailImg} alt="Card image" id="mailingImg" />
            <Card.ImgOverlay></Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default MailMe;
