import React, { useState } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
  Col,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { LinkContainer } from "react-router-bootstrap";
import tentImg from "../../images/images.store/3466701071.jpg";
import columbia from "../../images/images.store/columbia.jpg";
import marmot from "../../images/images.store/marmot.jpg";
import tatanka from "../../images/images.store/tatanka.jpg";
import thenorthface from "../../images/images.store/thenorthface.jpg";
import jackwolfskin from "../../images/images.store/jackwolfskin.jpg";
import levis from "../../images/images.store/levis.jpg";
import nike from "../../images/images.store/nike.jpg";
import hikingImg from "../../images/CampingHiking.jpg";
import manInForest from "../../images/manInForest.jpg";
import manInForest2 from "../../images/manInForest2.jpg";
import coupleClothing from "../../images/images.store/coupleClothing.jpg";
import "./store.css";

function Store(props) {
  const [itemsArray, setItemsArray] = useState(props.items);

  const[showHoverContent, setShowHoverContent] = useState(false);

  return (
    <div>
      <Row>
        <Nav
          id="headNavStore"
          className="justify-content"
          activeKey="/home"
          style={{ width: "100%" }}
        >
          <Nav.Item className="itemStore">
            <Nav.Link style={{ color: "black" }}>All products</Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link style={{ color: "black" }}>Hiking</Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link style={{ color: "black" }}>Camping</Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link style={{ color: "black" }}>New arrival</Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link style={{ color: "black" }}> SALE! </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      <Row>
        <Card className="bg-dark text-white" style={{ width: "100%" }}>
          <Card.Img
            src={hikingImg}
            style={{ height: "20rem" }}
            alt="Card image"
          />
        </Card>
      </Row>

      <h3 id="productsHeadline">Our products:</h3>

      <Row>
        <Col xs={2}>
          <Card className="apparel">
            <Card.Img src={columbia} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={marmot} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={tatanka} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={thenorthface} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={jackwolfskin} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={levis} alt="Card image" />
          </Card>

          <Card className="apparel">
            <Card.Img src={nike} alt="Card image" />
          </Card>
        </Col>

        <Col xs={8}>
          <Row>
            <Col className="flex">
              {itemsArray.map((item, index) => (
                <div key={index}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "500px",
                      alignItems: "center",
                    }}
                    id="storeCard"
                  >
                    <Card.Img
                      style={{ width: "10rem", height: "200px" }}
                      variant="top"
                      src={item.img}
                    />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{item.price}</ListGroupItem>
                      <ListGroupItem>{item.avaliability}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <LinkContainer
                        to="/singleItem"
                        onClick={() => props.toSingleItem(props.item.id)}
                      >
                        <Button
                          id="showProductButt"
                          style={{
                            backgroundColor: "gray",
                            borderStyle: "solid",
                            borderColor: "black",
                          }}
                        >
                          Show product
                        </Button>
                      </LinkContainer>
                      <Card.Link href="#"></Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs={2}>
        <Card className="bg-dark text-white" style={{width:"auto", height: "200px", marginRight:"20px"}}
        onMouseEnter={() => setShowHoverContent(true)}
        onMouseLeave={() => setShowHoverContent(false)}>
          <Card.Img
            src={manInForest}
            style={{ height: "20rem" }}
            alt="Card image"
          />
        </Card>
        {showHoverContent && (
          
            <Card border="dark" style={{ width:"auto", height: "400px", marginRight:"20px", alignItems:"top" }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Holydays are comming!</Card.Title>
      <Card.Text>
        Some of our finest products are waiting just for you.
        Checkout our sales! 
      </Card.Text>
    </Card.Body>
  </Card>  
        )}

<Card className="bg-dark text-white" style={{width:"auto", height: "200px", marginRight:"20px", marginTop:"150px"}}
        onMouseEnter={() => setShowHoverContent(true)}
        onMouseLeave={() => setShowHoverContent(false)}>
          <Card.Img
            src={manInForest2}
            style={{ height: "20rem" }}
            alt="Card image"
          />
        </Card>

        <Card className="bg-dark text-white" style={{width:"auto", height: "200px", marginRight:"20px", marginTop:"150px"}}
        onMouseEnter={() => setShowHoverContent(true)}
        onMouseLeave={() => setShowHoverContent(false)}>
          <Card.Img
            src={coupleClothing}
            style={{ height: "20rem" }}
            alt="Card image"
          />
        </Card>

        </Col>
      </Row>
    </div>
  );
}
export default Store;
