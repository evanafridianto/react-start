import { Nav, Navbar, Container } from "react-bootstrap";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Creation from "../pages/Creation";
import Contact from "../pages/Contact";
export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
            <Container fluid>
              <Navbar.Brand as={Link} to={"/home"}>
                ReactStart
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/home"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/creation"}>
                    Creation
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/creation" element={<Creation />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
