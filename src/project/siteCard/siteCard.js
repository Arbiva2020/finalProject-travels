import React, { useState } from "react";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
import "./siteCard.css";
import cardImage from "../../images/thenorthwest.jpg";
import rentImg from "../../images/hire-car-santorini.jpg";
import campImg from "../../images/3040260106.jpg";
import aidImg from "../../images/first-aid-kit-concept-vector.jpg";
import trainImg from "../../images/Flag_of_Israel_Railways.svg.jpg";
import eggedImg from "../../images/4846962.jpg";
import metroImg from "../../images/יהיה-בסדר-מטרופולין.jpg";
import israImg from "../../images/z1g5npkm.4kg.jpg";
import Calendar from "react-calendar";

function SiteCard(props) {
  const [productsArray, setProductsArray] = useState(props.products);
  const [date, setDate] = useState(new Date());
  console.log(productsArray);

  const ReactCalendar = () => {
    const onChange = (date) => {
      setDate(date);
    };
  };

  function sortByRating() {
    console.log("rating");
    const sortArrayByRating = productsArray.sort(
      (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
    );
    setProductsArray([...sortArrayByRating]);
  }

  // function renderProduct() {
  //   return productArrayState.map((element, index) => {
  //     return <Product product={element} key={index} />;
  //   });
  // }

  return (
    <Container>
      <Row>
        <Col xs={2} id="check">
          <Form>
            <Form.Label>
              <h5>Select:</h5>
            </Form.Label>
            <Form.Check
              type="checkbox"
              label="North"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="checkbox"
              label="South"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="Jerusalem"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Eilat & Haarava"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Tel-Aviv"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Central Israel"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Kids"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Extreme"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Religious sites"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Nature and hiking"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="checkbox"
              label="Shopping and Markets"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <button id="filterCheck">Filter</button>
          </Form>

          <div>
            <Calendar selectRange />
            {console.log("")}
          </div>

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
          {productsArray.map((product, index) => (
            <div key={index}>
              <Card style={{ width: "18rem", height: "40rem" }} id="siteCard">
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{product.price}</ListGroupItem>
                  <ListGroupItem>{product.days}</ListGroupItem>
                  <ListGroupItem>{product.rating}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="/productPage">Go to page</Card.Link>
                  <Card.Link href="#"></Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>

        <Col xs={2} id="filterByPrice">
          <Form>
            <h5 id="sortByPrice">Filter by price:</h5>
            <Form.Check
              type="checkbox"
              label="1000-2000"
              className="priceLevel"
            />
            <Form.Check
              type="checkbox"
              label="2000-3000"
              className="priceLevel"
            />
            <Form.Check
              type="checkbox"
              label="3000-4000"
              className="priceLevel"
            />
            <Form.Check
              type="checkbox"
              label="4000-5000"
              className="priceLevel"
            />
            <Form.Check type="checkbox" label="All" className="priceLevel" />
          </Form>

          <div>
            <p>
              <h5 id="ratingHeadline">Select rating:</h5>
            </p>
            <input type="radio" id="one" name="drone" />
            <label for="huey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </div>
          <div>
            <input type="radio" id="two" name="drone" />
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </div>
          <div>
            <input type="radio" id="three" name="drone" />
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </div>
          <div>
            <input type="radio" id="four" name="drone" />
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </div>
          <div>
            <input type="radio" id="five" name="drone" />
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </div>

          <div id="byRating">
            <Button onClick={sortByRating} id="sort">
              {" "}
              Sort
            </Button>
            <Button onClick={""} id="filterRating">
              Filter
            </Button>
          </div>

          <DropdownButton id="dropdown-item-button" title="Kitchen & diet:">
            <Dropdown.ItemText>Nutrition:</Dropdown.ItemText>
            <Dropdown.Item as="button">All</Dropdown.Item>
            <Dropdown.Item as="button">Kosher only</Dropdown.Item>
            <Dropdown.Item as="button">Vegeterian food</Dropdown.Item>
            <Dropdown.Item as="button">Vegan food</Dropdown.Item>
          </DropdownButton>

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

          <div>
            <h5>Our special offers:</h5>
          </div>
          <Card className="bg-darkA" id="rent">
            <Card.Img src={rentImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ color: "white" }}>Hire a car!</Card.Title>
              <Card.Text style={{ color: "white", textAlign: "bottom" }}>
                Contact us for a deal!
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-darkA" id="camp">
            <Card.Img src={campImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ color: "white" }}>Camping?</Card.Title>
              <Card.Text style={{ color: "white" }}>
                Call now for a deal!
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Card className="bg-darkA" id="aid">
            <Card.Img src={aidImg} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title
                style={{ color: "black", textAlign: "top", fontWeight: "bold" }}
              >
                Need an insurance?
              </Card.Title>
              <Card.Text
                style={{
                  color: "black",
                  textAlign: "bottom",
                  fontWeight: "bold",
                }}
              >
                Contact us
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default SiteCard;
