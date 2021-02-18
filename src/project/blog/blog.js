import React from "react";
import { Card, Button, Col, NavDropdown, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./blog.css";

function Blog(props) {
  return (
    <div>
      <p>
        <h1>Blog:</h1>
      </p>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {blog.userId}{blog.id}
          </Card.Subtitle>
          <Card.Text>{blog.body}</Card.Text>
          <Card.Link href="#">Next Blog</Card.Link>
          <Card.Link href="#">Prev Blog</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Blog;
