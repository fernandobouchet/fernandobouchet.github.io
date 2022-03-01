import { Carousel, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import { Projects } from "../Utils/MyProjects";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const ProjectsCarousel = Projects.map((project) => {
    return (
      <Carousel.Item key={project.id}>
        <img className="d-block w-100" src={project.image} alt="First slide" />
        <Carousel.Caption>
          <StyledButton variant="dark">
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Preview
            </a>
          </StyledButton>
          <StyledButton variant="dark">
            <a href={project.github} target="_blank" rel="noreferrer">
              Github Sources
            </a>
          </StyledButton>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
      variant="dark"
      pause="hover"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {ProjectsCarousel}
    </Carousel>
  );
}

export default ControlledCarousel;

const StyledButton = styled(Button)`
  margin: 0.2rem;

  > a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    margin-bottom: 0;
    padding: 0;
    text-align: center;
    font-size: 0.6rem;
    width: 5.8rem;
    height: 1.2rem;
  }
`;
