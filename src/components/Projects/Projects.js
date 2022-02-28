import { Row, Container } from "react-bootstrap";
import styled from "styled-components";
import ControlledCarousel from "./ControlledCarousel";

function Projects() {
  return (
    <>
      <StyledContainer id="Projects">
        <Row>
          <h2>These are some projects I've been working on:</h2>
        </Row>
        <ControlledCarousel />
        <h2>You can find more on my Github.</h2>
      </StyledContainer>
    </>
  );
}

export default Projects;

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
`;
