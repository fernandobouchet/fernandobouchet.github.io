import { Row, Container } from "react-bootstrap";
import styled from "styled-components";
import Cards from "./Cards";

function Projects() {
  return (
    <MainContainer fluid>
      <StyledContainer id="Projects" fluid>
        <Row>
          <h2>These are some projects I've been working on:</h2>
        </Row>
        <Cards />
        <Row>
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
        </Row>
      </StyledContainer>
    </MainContainer>
  );
}

export default Projects;

const MainContainer = styled(Container)`
  background-color: #17191c;
`;

const StyledContainer = styled(Container)`
  background-color: #17191c;
  color: silver;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  max-width: 1200px;
  padding-top: 5rem;

  @media (max-width: 480px) {
    padding-bottom: 5rem;
    height: auto;
  }
`;
