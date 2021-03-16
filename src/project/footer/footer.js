import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav, Navbar, FormControl, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "./footer.css";

function Footer(props) {
  const currentYear = new Date().getFullYear();
  // const [keyWord, setKeyword] = useState();
  // let { filter } = useParams();

  // useEffect(() => {
  //   const searchKeyword = async () => {
  //     const keyWord = await axios.get(`http://localhost:3001/items/${filter}`);
  //     console.log(items.data);
  //     setKeyword(items.data);
  //   };
  //   searchKeyword();
  // },[]);

  return (
    <Navbar bg="dark" variant="dark" id="footerNav">
      <Navbar.Brand href="/blogB">BLOG</Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <FontAwesomeIcon icon={faFacebook} />
        </Nav.Link>
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <FontAwesomeIcon icon={faInstagram} />
        </Nav.Link>
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </Nav.Link>
        <p id="rights">All rights reserved © {currentYear} </p>
      </Nav>
      <Form inline>
        <Nav.Link href="#pricing" id="contact" href="/contactUs">
          Contact Us
        </Nav.Link>
        <FormControl
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-info" id="search">
          Search
        </Button>
      </Form>
    </Navbar>
  );
}
export default Footer;
