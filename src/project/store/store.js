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
import "./store.css";

function Store(props) {
  const [itemsArray, setItemsArray] = useState(props.items);

  return (
    <div>
      <Row>
        <Nav id="headNavStore" className="justify-content" activeKey="/home" style={{width: "100%"}}>
          <Nav.Item className="itemStore">
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item className="itemStore">
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      <h3 id="productsHeadline">Our products:</h3>

<Row>
      <Col xs={2}>

      </Col>

      <Col xs={10}>
      <Row>
        <Col className="flex">
          {itemsArray.map((item, index) => (
            <div key={index}>
              <Card style={{ width: "18rem", height: "500px", alignItems:"center" }} id="storeCard">
                <Card.Img style={{width: "10rem", height: "200px"}} variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{item.price}</ListGroupItem>
                  <ListGroupItem>{item.avaliability}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="./singleItem">Go to item page</Card.Link>
                  <Card.Link href="#"></Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>
      </Row>
      </Col>

      {/* <Col xs={1}>

      </Col>  */}

      </Row> 
    </div>
    
  );
}
export default Store;
