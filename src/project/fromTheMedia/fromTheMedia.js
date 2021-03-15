import React, { useState } from "react";
import { Card, Button, Col, NavDropdown, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import JerusalemMedia from "../../images/Jerusalem_Southern_Walls_1.jpg";
import "./fromTheMedia.css";

// const[showHoverContent, setShowHoverContent] = useState(false);

// function changeBackground(e) {
//   e.target.style.background = 'red';
// }

function FromTheMedia(props) {
  return (
    <div>
      <Card>
        <Card.Img id="jerusalemMediaImg" variant="top" src={JerusalemMedia} />
        <Card.Body id="mediaCardBody">
          <Card.Text>
            <h3 id="fromMediah3">From the media:</h3>
          </Card.Text>
        </Card.Body>
      </Card>
<Row>
      <Card class="press" border="secondary" style={{ width: "18rem", marginLeft:"10px", marginRight:"10px" }}>
        <Card.Body>
          <Card.Title>NO.1 travel site!</Card.Title>
          <Card.Text>
           "True proffesionals. Each and every detail was taken into account. 
           We had the time of our lives"
          </Card.Text>
        </Card.Body>
        <Card.Footer>Afula Times</Card.Footer>
      </Card>

      <Card class="press" border="secondary" style={{ width: "18rem", marginLeft:"10px", marginRight:"10px" }}>
        <Card.Body>
          <Card.Title>NO.1 travel site!</Card.Title>
          <Card.Text>
           "True proffesionals. Each and every detail was taken into account. 
           We had the time of our lives"
          </Card.Text>
        </Card.Body>
        <Card.Footer>Afula Times</Card.Footer>
      </Card>

      <Card class="press" border="secondary" style={{ width: "18rem", marginLeft:"10px", marginRight:"10px" }}>
        <Card.Body>
          <Card.Title>NO.1 travel site!</Card.Title>
          <Card.Text>
           "True proffesionals. Each and every detail was taken into account. 
           We had the time of our lives"
          </Card.Text>
        </Card.Body>
        <Card.Footer>Afula Times</Card.Footer>
      </Card>

      <Card class="press" border="secondary" style={{ width: "18rem", marginLeft:"10px", marginRight:"10px" }}>
        <Card.Body>
          <Card.Title>NO.1 travel site!</Card.Title>
          <Card.Text>
           "True proffesionals. Each and every detail was taken into account. 
           We had the time of our lives"
          </Card.Text>
        </Card.Body>
        <Card.Footer>Afula Times</Card.Footer>
      </Card>

      <Card class="press" border="secondary" style={{ width: "18rem", marginLeft:"10px", marginRight:"10px" }}>
        <Card.Body>
          <Card.Title>NO.1 travel site!</Card.Title>
          <Card.Text>
           "True proffesionals. Each and every detail was taken into account. 
           We had the time of our lives"
          </Card.Text>
        </Card.Body>
        <Card.Footer>Afula Times</Card.Footer>
      </Card>
      </Row>
      <br />
    </div>
  );
}
export default FromTheMedia;
