import React, { useState } from "react";
import { Form, Col, Row, Img, Button, Card, } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./contactUs.css";
import callImg from "../../images/s-l400.jpg";

function ContactUs(props) {
    let[form, setForm] = useState(Form);
    function updateForm(){
        let name = document.getElementById("nameInput").value;
        setForm(name);
    }

  return (
    <div>
      <Row>
        <Col xs={7}>
            <h3 id="h3contact">Let's talk.</h3>
            <h2 id="h2contact">You first.</h2> 
          <Form id="contact">
            <Form.Row>
              <Col xs={3}>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom>
                  <option value="0">Choose...</option>
                  <option value="1">Mr.</option>
                  <option value="2">Ms.</option>
                  <option value="3">Mrs.</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="First Name" id="nameInput"/>
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

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>What can we do for U?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>

          <Button onClick={updateForm} id="contactButt">Submit</Button>

        </Col>

        <Col xs={5}>
        <Card className="callUsCard">
  <Card.Img src={callImg} alt="Card image" id="callUsImg"/>
</Card>
        </Col>

      </Row>
    </div>
  );
}
export default ContactUs;


// {"thank you for contacting us!"}