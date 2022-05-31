import { Nav, Navbar, Container } from "react-bootstrap";
const CNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ReactStart</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default CNavbar;
