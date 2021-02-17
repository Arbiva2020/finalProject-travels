import React from "react";
import { Nav, Navbar, FormControl, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <Navbar bg="dark" variant="dark" id="footerNav">
      <Navbar.Brand href="/blog">BLOG</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <a>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </Nav.Link>
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <a>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Nav.Link>
        <Nav.Link href="" style={{ fontSize: "25px" }}>
          <a>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </Nav.Link>
        <p id="rights">All rights reserved © {currentYear} </p>
      </Nav>
      <Form inline>
        <Nav.Link href="#pricing" id="contact" href="/contactUs">
          Contact Us
        </Nav.Link>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info" id="search">
          Search
        </Button>
      </Form>
    </Navbar>
  );
}
export default Footer;
