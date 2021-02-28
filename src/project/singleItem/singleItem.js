import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";
import {
  Card,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Row,
  Button,
  Col,
  Container,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./singleItem.css";

function SingleItem(props) {
  let [counter, setCount] = useState(1);
  const [itemsArray, setItemsArray] = useState([props.items]);

  function add() {
    setCount(counter + 1);
  }
  function remove() {
    setCount(counter - 1);
  }


// const addToHeandler = () => {
//   props.addToCart(props.item.id)
// }

// const addToWishlist = ()=> {
//   props.addToWishlist(props.item.id)
// }



  return (
    <div>
      <Row>
        <Col xs={2}>
        <Card style={{ width: "10rem", height: "8rem" }} className="sideImgCard">
            <Card.Img variant="top" src={props.item.tentImg1} />
          </Card>
          <Card style={{ width: "10rem", height: "8rem" }} className="sideImgCard">
            <Card.Img variant="top" src={props.item.tentImg2} />
          </Card>
        </Col>

        <Col xs={6} id="colItem">
          <Card style={{ width: "40rem", height: "30rem" }} id="itemImgCard">
            <Card.Img variant="top" src={props.item.img} />
          </Card>
          <Card style={{ width: "20rem", height: "30rem" }} id="itemDetailCard">
            <Card.Body>
              <Card.Title id="singleTitle">{props.item.name}</Card.Title>
              <Card.Text>{props.item.description}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{props.item.price}</ListGroupItem>

{/* <itemInfo addToCart={addToCartHandler} detail={item} /> */}

                <ButtonGroup aria-label="Basic example" id="quantity">
                  <Button
                    variant="secondary"
                    onClick={remove}
                    className="quanSelectors"
                  >
                    -1
                  </Button>
                  <Button
                    variant="secondary"
                    disabled
                    className="quanSelectors"
                  >
                    {counter}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={add}
                    className="quanSelectors"
                  >
                    +1
                  </Button>
                </ButtonGroup>
                <Card.Link href="/store" style={{color: "gray"}}>Back to store</Card.Link>
                <Card.Link href="#"></Card.Link>
              </ListGroup>
            </Card.Body>
            <Button variant="secondary" onClick={""} id="addToCart">
              Add to cart
            </Button>
            <Button variant="secondary" onClick={""} id="addToWishlist">
              Add to wishlist
            </Button>
          </Card>
        </Col>

        <Col xs={4}>

        </Col>
      </Row>

      {/* <Row>
        <h5 id="mightLike">You might also like:</h5>
        {items.filter(item => item.category === item.catagory).map(setItemsArray =>(
            <div key={index}>
              <Card style={{ width: "18rem", height: "500px" }} id="storeCard">
                <Card.Img style={{width: "10rem", height: "200px"}} variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
          
                </Card> 
                </div>
                ))}
      </Row>
      */}
    </div>
  );
}

export default SingleItem;
// {itemsArray.map((item, index) => (