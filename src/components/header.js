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
        <div className="page-container">
          <div className="content-wrap"></div>
          <div>
            <>
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
            </>
            <div>
              <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/creation" element={<Creation />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
