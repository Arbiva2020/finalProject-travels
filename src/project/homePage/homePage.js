import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {Container, Card, Button, CardColumns, Row, NavDropdown} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./homePage.css";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
// import { faWheelChair } from "@fortawesome/free-solid-svg-icons";
import homeImg from "../../images/imgp.jpg";
import homeImgC from "../../images/image.jpg";
import homeImgB from "../../images/shutterstock_656752000.jpg";
import homeImgD from "../../images/iStock-467607415.jpg";

function HomePage(props) {
return (
<Container>
    <Card>
        <Card.Body id="covid" href="/covid19Info">Find out more about COVID-19 restrictions <FontAwesomeIcon icon={faInfoCircle} /></Card.Body>
    </Card>


    <CardColumns>
  <Card>
    <Card.Img variant="top" src={homeImg} />
    <Card.Body>
      <Card.Title>The most fabolous sites in Israel</Card.Title>
      <Card.Text>
       Looking for vacation proffesionals? you googled the right place!
       Here at Travel Israel we offer you the best deals, copons and accessories
       available today!
       Contact us: <Button id="contactUs" href="/contactUs">Contact now!</Button>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        "Travel Israel" got the highest rate of all travel agencies inspected.
        An easy and convenient experiance, at fair cost"
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Israel Times, tourism <cite title="Source Title">{"Source Title"}</cite>
        </small>
      </footer>
      <Card.Img variant="top" src={homeImgD} />
    </blockquote>
  </Card>

  <Card>
    <Card.Img variant="top" src={homeImgB} />
    <Card.Body>
      <Card.Title>travel News</Card.Title>
      <Card.Text>
        Would you like us to keep you up to date with all of our latest news? Be the first
        to know about latest trips, coupons and offers!{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button id="posted" href="/mailMe">Keep me posted!</Button></small>
    </Card.Footer>
  </Card>
  <Card id="covid19" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Due to COVID-19 outbreak, we offer free online trips and meetings for members only.
      </p>
      <footer className="blockquote-footer">
        <Button id="joinNow" href="/mailMe">Join Now</Button>
      </footer>
    </blockquote>
  </Card>
  <Card className="text-center">
    <Card.Body>
      <Card.Title>For more information</Card.Title>
      <Card.Text>
        Checkout our links for pre-vacation preperations!
      </Card.Text>
      <Card.Text>
        <small className="text-muted"><Button id="links" href="/linkMe">Link me!</Button></small>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={homeImgC} />
  </Card>
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        "I am so happy for choosing to tour with "Travel Israel"! We all had a wonderful time, 
        this was an experiance we will carry with us forever!"
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Jenny, NY, NY <cite title="Source Title">Reviews</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>We are hiring!!</Card.Title>
      <Card.Text>
        "Travel Israel" is growing, and we invite you to grow with us!
        
      </Card.Text>
      <Card.Text>
        <small className="text-muted"><Button id="hiring" href="/weAreHiring">Open positions</Button></small>
      </Card.Text>
      <FontAwesomeIcon icon={faHiking} id="hikingIcon" size = '10x' />
    </Card.Body>
  </Card>
</CardColumns>

<Card id="manyButt">
  <Card.Body>
    <Button variant="secondary" id="allvac" href="/siteCard">To all sites</Button>
    <Button variant="secondary" id="accessible" href="/accessibleTrips">Accessible trips</Button>
    <Button variant="secondary" id="organized" href="/organized">Organized vaccations</Button>
  </Card.Body>
</Card> 

    <Card className="text-center">
  <Card.Header><p id="galleryHeadline"><h2>Gallery</h2></p></Card.Header>
  <Card.Body>
    <Card.Title>Our Happy travelers</Card.Title>
    <Card.Text>
     Take a peek into the marvelous sites and experiances of our happy customers at different
     locations of our beautiful Istael
    </Card.Text>
    <Button variant="primary" id="gallery" href="/gallery">To gallery</Button>
  </Card.Body>
  <Card.Footer className="text-muted">
  <Row id="aboutButt">
<Button variant="secondary" id="store" href="/store">Go to store </Button>{' '}
          <NavDropdown style={{}} title="Select area" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Golan</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Galil</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Jerusalem</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Central Israel</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">South</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Eilat and Haarava
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
<Button variant="secondary" id="media" href="/fromTheMedia">From the media</Button>{' '}
</Row> {""}
    </Card.Footer>
</Card>
</Container>
  );
}

export default HomePage;
