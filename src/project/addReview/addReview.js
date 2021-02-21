import React from "react";
import { Card, Button, Col, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import Yarkon from "../../images/yarkonPark.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./addReview.css";

function AddReview(props) {
  return (
    <div>
      <Row>
        <Col xs={7}>
          <p>
            <h3 id="addReviweTitle">Share thoughts of your own!</h3>
          </p>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label></Form.Label>
              <Form.Control placeholder="Add review" as="textarea" rows={3} />
            </Form.Group>
          </Form>

          <h5 id="rateReview">Select rating:</h5>
          <span style={{ margin: "7px" }}>
            <input
              type="radio"
              id="one"
              name="drone"
            />
            <label for="huey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </span>

          <span style={{ margin: "7px" }}>
            <input type="radio" id="two" name="drone" />
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
            <label for="dewey">
              <FontAwesomeIcon style={{ color: "yellow" }} icon={faStar} />
            </label>
          </span>

          <span style={{ margin: "7px" }}>
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
          </span>

          <span style={{ margin: "7px" }}>
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
          </span>

          <span style={{ margin: "7px" }}>
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
          </span>
          <div>
            <Button
              style={{
                backgroundColor: "gray",
                borderStyle: "solid",
                borderColor: "black",
                margin: "20px"
              }}
            >
              Add review
            </Button>
          </div>
        </Col>

        <Col xs={5}>
          <img src={Yarkon} id="yarkonImg" class="img-fluid" />
        </Col>
      </Row>
    </div>
  );
}
export default AddReview;
