import { Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Cards from './Cards';
import { Fade } from 'react-awesome-reveal';

function Projects() {
  return (
    <Fade duration={2000} fraction="0.1">
      <MainContainer fluid>
        <StyledContainer id="Projects" fluid>
          <Row>
            <h3>These are some projects I've been working on:</h3>
          </Row>
          <Cards />
          <Row>
            <h3>
              You can find more on my&nbsp;
              <a
                href="https://github.com/fernandobouchet?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              .
            </h3>
          </Row>
        </StyledContainer>
      </MainContainer>
    </Fade>
  );
}

export default Projects;

const MainContainer = styled(Container)``;

const StyledContainer = styled(Container)`
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
