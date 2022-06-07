import { Nav, Navbar, Container } from "react-bootstrap";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="md" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/home"}>
            ReactStart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item></Nav.Item>
              <Nav.Link as={Link} to={"/creation"}>
                Creation
              </Nav.Link>
              <Nav.Item>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
