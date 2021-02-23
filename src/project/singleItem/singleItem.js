import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {LinkContainer} from "react-router-bootstrap";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Form,
  Row,
  Button,
  Col,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./singleItem.css";

function SingleItem(props) {
  // const [item, setItem] = useState(props.item);
  // let item = props.item;

  return(
    <div>
      <Card style={{ width: "18rem", height: "40rem" }} id="itemCard">
        <Card.Img variant="top" src={props.item.img} />
        <Card.Body>
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.item.price}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/store">Back to store</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card>
    </div>
);
}

export default SingleItem;
