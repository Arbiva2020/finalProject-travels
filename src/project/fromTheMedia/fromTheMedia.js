import React from "react";
import { Card, Button, Col, NavDropdown, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import JerusalemMedia from "../../images/Jerusalem_Southern_Walls_1.jpg";
import "./fromTheMedia.css";

function FromTheMedia(props) {
  return (
    <div>
      <Card>
        <Card.Img id="jerusalemMediaImg" variant="top" src={JerusalemMedia} />
        <Card.Body>
          <Card.Text>
            <h3 id="fromMediah3">From the media:</h3>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>Header</Card.Footer>
      </Card>
      <br />
    </div>
  );
}
export default FromTheMedia;
