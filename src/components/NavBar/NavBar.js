import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";

function NavBar() {
  return (
    <>
      <StyledNavbar variant="dark" sticky="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </StyledNavbar>
    </>
  );
}

export default NavBar;

const StyledNavbar = styled(Navbar)`
  background-color: #161b22;
`;
