import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
