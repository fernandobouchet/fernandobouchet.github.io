import { Button, Row, Card } from "react-bootstrap";
import styled from "styled-components";
import { Projects } from "../Utils/MyProjects";

function Cards() {
  const ProjectsCards = Projects.map((project) => {
    return (
      <StyledCard bg="dark" key={project.id}>
        <Card.Img variant="top" src={project.image} />
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

const StyledCard = styled(Card)`
  width: 25rem;
  padding: 0;
  margin: 1rem;
  transition: 0.1s linear;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

const StyledCardImgOverlay = styled(Card.ImgOverlay)`
  top: revert;
  padding: 0.5rem;
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
