import { Row, Container } from "react-bootstrap";
import styled from "styled-components";
import ControlledCarousel from "./ControlledCarousel";

function Projects() {
  return (
    <>
      <StyledContainer id="Projects" fluid>
        <Row>
          <h2>These are some projects I've been working on:</h2>
        </Row>
        <ControlledCarousel />
        <h2>
          You can find more on my&nbsp;
          <a
            href="https://github.com/fernandobouchet?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          .
        </h2>
      </StyledContainer>
    </>
  );
}

export default Projects;

const StyledContainer = styled(Container)`
  background-color: #17191c;
  color: silver;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
`;
