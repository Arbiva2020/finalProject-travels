import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import {LinkContainer} from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav"
        bg="dark"
        variant="dark"
        id="headerNav"
      >
        <h1 href="" id="logo" className="logo_text_animated">
          Travel Israel
        </h1>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>
            <Nav.Link href="/">Homepage</Nav.Link>
            <NavDropdown title="Find out more" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                View Reviwes and Rating
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Add Review</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Send to a Friend
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                External Links
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/createAccount">New Account</Nav.Link>
            <Nav.Link eventKey={2} href="/logIn">Log In</Nav.Link>
            <FontAwesomeIcon icon={faShoppingCart}  style={{ fontSize: "30px", color:"white"}}/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
