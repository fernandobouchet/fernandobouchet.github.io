import { Button, Row, Card } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { Projects } from "../Utils/MyProjects";

function Cards() {
  const ProjectsCards = Projects.map((project) => {
    return (
      <StyledCard bg="dark" key={project.id}>
        <StyledCardImg variant="top" src={project.image} />
        <StyledCardImgOverlay>
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

  animation-name: ${fadeIn};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
`;

const StyledCardImg = styled(Card.Img)`
  transition: 0.3s;
`;

const StyledCard = styled(Card)`
  width: 25rem;
  padding: 0;
  margin: 1rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    border-style: solid;
    border-color: #17191c;
    > ${StyledCardImgOverlay} {
      display: block;
    }

    ${StyledCardImg}.card-img-top {
      -webkit-filter: brightness(50%) blur(2px);
      filter: brightness(50%) blur(2px);
    }
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

const StyledRow = styled(Row)`
  justify-content: center;
  padding: 1rem 0;
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
