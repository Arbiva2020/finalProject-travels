import React from "react";
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
import { propTypes } from "react-bootstrap/esm/Image";
import cardImage from "../../images/thenorthwest.jpg";
import tentImg from "../../images/images.store/3466701071.jpg";
import "./store.css";

// const items = [
//     {
//       Item: "2 pl tent",
//       description: "High quality tent for two people"
//       price (NIS): 250,
//       avaliability: "true/false"
//       img: null,
//     },
//     {
//       name: "Pocket knife",
//       description: "strong and reliable, a must have!"
//       price (NIS): 300,
//       avaliability: "true/false"
//       img: null,
//     },
//   ];

function Store(props) {
return(
<Container>
      <Row>
        <Col xs={2} id="check">
          <Form>
            <Form.Label>
              <h4>Select:</h4>
            </Form.Label>
            <Form.Check
              type="checkbox"
              label="Tents"
            />
            <Form.Check
              type="checkbox"
              label="Pocket-knifes"
            />
            <Form.Check
              type="checkbox"
              label="Coffe set"
            />
            <Form.Check
              type="checkbox"
              label="hiking showes"
            />
            <Form.Check
              type="checkbox"
              label="Shoresh sandals"
            />
            <Form.Check
              type="checkbox"
              label="Hamock"
            />
            <Form.Check
              type="checkbox"
              label="Picknic cooler"
            />
    
            <button id="filterItems">Filter</button>
          </Form>

          <div id="transportation">
            <p>
              <h5>Transportation:</h5>
            </p>
            <Card className="transportation">
              <Card.Link href="https://www.egged.co.il/">
                <Card.Img src={eggedImg} alt="Card image" />
              </Card.Link>
            </Card>
            <Card className="transportation">
              <Card.Link href="https://www.rail.co.il/">
                <Card.Img src={trainImg} alt="Card image" />
              </Card.Link>
            </Card>
            <Card className="transportation">
              <Card.Link href="https://www.metropoline.com/Pages/Home.aspx?p=Home#/HomeMain/1">
                <Card.Img src={metroImg} alt="Card image" />
              </Card.Link>
            </Card>
            <Card className="transportation">
              <Card.Link href="https://www.israir.co.il/">
                <Card.Img src={israImg} alt="Card image" />
              </Card.Link>
            </Card>
          </div>
        </Col>

        <Col xs={8} className="flex">
          {props.items.map((item, index) => (
            <div key={index}>
              <Card style={{ width: "18rem" }} id="store">
                <Card.Img variant="top" src={tentImage} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{item.price}</ListGroupItem>
                  <ListGroupItem>{item.availability}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="/itemPage">Go to item page</Card.Link>
                  <Card.Link href="#"></Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>

        <Col xs={2} id="filter">
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="ratingSelect"
            custom
          >
            <option value="0">Select</option>
            <option value="1">Hotel</option>
            <option value="2">Bed & breakfast</option>
            <option value="3">Camping</option>
          </Form.Control>

          <Form id="selectPrice">
            <p>
              <h5>Select max price:</h5>
            </p>
            <Form.Group control id="range">
              <Form.Label>Price range:</Form.Label>
              <Form.Control type="range" custom />
            </Form.Group>
          </Form>

          <DropdownButton id="dropdownItemButton" title="Kitchen & diet:">
            <Dropdown.ItemText>Nutrition:</Dropdown.ItemText>
            <Dropdown.Item as="button">All</Dropdown.Item>
            <Dropdown.Item as="button">Kosher only</Dropdown.Item>
            <Dropdown.Item as="button">Vegeterian food</Dropdown.Item>
            <Dropdown.Item as="button">Vegan food</Dropdown.Item>
          </DropdownButton>

          <Button type="submit" id="submit">
            Submit
          </Button>

          <Card className="bg-dark text-white" id="rent">
            <Card.Img src={rentImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Hire a car!</Card.Title>
              <Card.Text>Contact us for a deal!</Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-white" id="camp">
            <Card.Img src={campImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Camping?</Card.Title>
              <Card.Text>Call now for a deal!</Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-dark text-white" id="aid">
            <Card.Img src={aidImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ color: "black", textAlign: "top" }}>
                Need an insurance?
              </Card.Title>
              <Card.Text style={{ color: "black", textAlign: "bottom" }}>
                Contact us
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Store;




    
