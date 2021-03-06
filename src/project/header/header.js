import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { LinkContainer } from "react-router-bootstrap";

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
            <LinkContainer to="/about" style={{ marginRight: "20px" }}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/" style={{ marginRight: "20px" }}>
              <Nav.Link>HomePage</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/siteCard" style={{ marginRight: "20px" }}>
              <Nav.Link>Our trips</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/store" style={{ marginRight: "20px" }}>
              <Nav.Link>Store</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/fromTheMedia" style={{ marginRight: "20px" }}>
              <Nav.Link>From the media</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Find out more" id="collasible-nav-dropdown">
              <LinkContainer to="/reviewsAndRatings">
                <NavDropdown.Item>View Reviwes and Rating</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/addReview">
                <NavDropdown.Item>Add Review</NavDropdown.Item>
              </LinkContainer>
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
            <Nav.Link eventKey={2} href="/logIn">
              Log In
            </Nav.Link>
            <LinkContainer
              to="/cart"
              style={{ fontSize: "25px", color: "white", marginTop: "5px" }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </LinkContainer>
            <LinkContainer
              to="/wishlist"
              style={{ margin: "8px", fontSize: "20px", color: "white" }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
