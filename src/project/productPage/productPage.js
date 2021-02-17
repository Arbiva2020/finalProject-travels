import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  NavDropdown,
  Card,
} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import cardImage from "../../images/thenorthwest.jpg";
import "./productPage.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductCarousel from "./ProductCarousel";

function ProductPage(props) {
  let stars = [];
  let product = props.product;
  for (let i = 0; i < props.product.rating; i++) {
    stars.push(
      <FontAwesomeIcon key={i} style={{ color: "yellow" }} icon={faStar} />
    );
  }
  let starsP = (
    <p>
      {stars.map((star) => (
        <>{star}</>
      ))}
    </p>
  );

  return (
    <Container className="page">
      <Row id="rowA">
        <Col>
          <Card className="bg-dark text-white" id="photoCard">
            <Card.Img src={cardImage} alt="Card image" />
            <Card.ImgOverlay></Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row id="rowC">
        <Col lg="auto">
          <Card style={{ width: "40rem" }} id="siteCard">
            <Card.Body>
              <Card.Title>
                <p className="font-weight-bold">{product.name}</p>
              </Card.Title>
              <Card.Text>
                <p className="font-weight-bold">Description:</p>{" "}
                {product.description}
              </Card.Text>
              <Card.Text>
                <p className="font-weight-bold">Number of days:</p>{" "}
                {product.days}
              </Card.Text>
              <Card.Text>
                <p className="font-weight-bold">Price per person:</p>{" "}
                {product.price}
              </Card.Text>
              <Card.Text>
                <p className="font-weight-bold">See & do:</p>{" "}
                {product.attractions}
              </Card.Text>
              <Card.Text>
                <p className="font-weight-bold">Rating (scaled 1-5):</p>{" "}
                {product.rating} <div>{starsP}</div>
              </Card.Text>
              <Card.Link href="#">Read reviews</Card.Link>
              <Card.Link href="#">Rate trip</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md="auto" id="imgCol">
          <div><ProductCarousel /></div>
        </Col>
      </Row>

      <Row id="rowD">
        <Col>
          <Button variant="secondary" size="md" id="buttBack" href="/">
            Back to homepage
          </Button>
        </Col>

        <Col>
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
        </Col>

        <Col>
          <Button variant="secondary" size="md" id="buttNextTrip">
            Load next
          </Button>
        </Col>
        
      </Row>
      <Row id="rowE">
        <Col>
          <Button variant="secondary" size="lg" id="buttBook" href="/orderPage">
            BOOK NOW!
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
