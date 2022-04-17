import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function NavBar(props) {
  const { changeTheme, theme } = props;

  const ThemeIcon = (
    <FontAwesomeIcon
      icon={theme === "light" ? faMoon : faSun}
      className="fa-1x"
      color={theme === "light" ? "#777777" : "#7c7d7d"}
    />
  );

  return (
    <>
      <StyledNavbar
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
        props={theme}
      >
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          <StyledThemeButton onClick={() => changeTheme()}>
            {ThemeIcon}
          </StyledThemeButton>
        </Container>
      </StyledNavbar>
    </>
  );
}

export default NavBar;

const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.background};
`;

const StyledThemeButton = styled.button`
  background-color: transparent;
  border-color: transparent;
`;
