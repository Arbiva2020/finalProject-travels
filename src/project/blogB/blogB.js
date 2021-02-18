import { React, useState } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./blogB.css";

function Posts(props) {
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
    return data;
  }

  const [blogsArray, setBlog] = useState("posts is loading..");

  getPosts().then((data) => {
    console.log(data);
    const blogsHtml = data.map((blog, index) => {
      return (
        <div key={index}>
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.body}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {blog.userId}
              {blog.id}
            </Card.Footer>
          </Card>
        </div>
      );
    });
    console.log(blogsHtml);
    setBlog(blogsHtml);
  });

  return (
    <Container>
      <p>
        <h1>Always happy to share our thoughts! </h1>
      </p>
      <p>
        <h3>All information you need, in one place </h3>
      </p>
      <Col xs={8} className="flex">
        {blogsArray}
      </Col>
    </Container>
  );
}
export default Posts;
