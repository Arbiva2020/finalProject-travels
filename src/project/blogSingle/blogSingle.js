import { React, useState } from "react";
import { Card, Container, Col, Row, Button, NavDropdown } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import "./blogSingle.css";

function BlogSingle(props) {
  
  async function getPost() {
    const response = await fetch("http://localhost:3001/blogs/");
    //by id - onclick
    const data = await response.json();
    return data;
  }

  const [singleBlog, setSingleBlog] = useState("post is loading..");

  getPost().then((data) => {
    console.log(data);
    const blogSingleHtml = data.map((blog, index) => {
      return (
        <div key={index}>
          <Row>
            <Col xs={8}>
              <h3>{blog.headline}</h3>
              <div
                border="secondary"
                style={{
                  width: "18rem",
                  margin: "10px",
                  width: "18rem",
                  height: "22rem",
                }}
              > 
                  <div>
                    {blog.preview}
                  </div>
                 <div>
                   {blog.content}
                 </div>

              </div>
            </Col>
          </Row>
        </div>
      );
    });
    console.log(blogsHtml);
    setBlog(blogsHtml);
  });

  return (
    <Container>
      <p>
        <h4>Do you have a story to tell?</h4>
        <h3>Submit post here*</h3>
      </p>
      <Row>
        <Col xs={10} className="flex">
          {blogsArray}
        </Col>
      </Row>
      <Row>
      <Button onClick={""} style={{margin: "20px",
                backgroundColor:"lightgray",
                color: "black",
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "2px", verticalAlign:"buttom", display:"inline"}}>All blogs</Button>
      </Row>
    </Container>
  );
}
export default BlogSingle;

