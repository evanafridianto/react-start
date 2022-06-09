import { Nav, Navbar, Container } from "react-bootstrap";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Movies from "../pages/Movies";
import Contact from "../pages/Contact";
export default class Header extends Component {
  render() {
    return (
      <Router>
        <div className="page-container py-5">
          <div className="content-wrap"></div>
          <div>
            <>
              <Navbar bg="dark" expand="md" variant="dark" fixed="top">
                <Container>
                  <Navbar.Brand as={Link} to={"/"}>
                    ReactStart
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Item>
                        <Nav.Link as={Link} to={"/"}>
                          Home
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link as={Link} to={"/about"}>
                          About
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item></Nav.Item>
                      <Nav.Link as={Link} to={"/movies"}>
                        Movies
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
              <Container className="p-5">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/movies" element={<Movies />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
                </Routes>
              </Container>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
