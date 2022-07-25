import { Button, Row, Card } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { Projects } from '../Utils/MyProjects';

function Cards() {
  const ProjectsCards = Projects.map((project) => {
    return (
      <StyledCard bg="dark" key={project.id}>
        <StyledCardImg
          variant="top"
          src={project.image}
          alt={`${project.title} website preview image`}
        />
        <StyledCardImgOverlay>
          <CardInfoContainer>
            <ProjectTitle>{project.title}</ProjectTitle>
          </CardInfoContainer>
          <div>
            <StyledButton variant="primary">
              <a href={project.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            </StyledButton>
            <StyledButton variant="primary">
              <a href={project.github} target="_blank" rel="noreferrer">
                Sources
              </a>
            </StyledButton>
          </div>
        </StyledCardImgOverlay>
      </StyledCard>
    );
  });

  return <StyledRow>{ProjectsCards}</StyledRow>;
}

export default Cards;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const StyledCardImgOverlay = styled(Card.ImgOverlay)`
  position: absolute;
  display: none;
  top: revert;
  padding: 0.5rem;
  height: 100%;

  animation-name: ${fadeIn};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
`;

const StyledCardImg = styled(Card.Img)`
  transition: transform 750ms cubic-bezier(0.5, 0, 0.5, 1), opacity 250ms linear;
  border-radius: unset;
  aspect-ratio: 16 / 9;
`;

const ProjectTitle = styled(Card.Title)`
  font-size: 1.7rem;
  color: white;
  text-align: center;
`;

const CardInfoContainer = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 24rem;
  padding: 0;
  margin: 5px;
  overflow: hidden;

  &:hover {
    > ${StyledCardImgOverlay} {
      display: flex;
      flex-direction: column;
    }

    ${StyledCardImg} {
      transform: scale(1.2);
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

const StyledRow = styled(Row)`
  justify-content: center;
  padding: 2rem 0;
`;

const StyledButton = styled(Button)`
  margin: 0.6rem;
  padding: 0.4rem;

  > a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    margin-bottom: 0;
    padding: 0;
    text-align: center;
    font-size: 0.8rem;
    width: 4rem;
    height: 2rem;
  }
`;
