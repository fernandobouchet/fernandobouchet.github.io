import { Carousel, Button, Image } from "react-bootstrap";
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
      <StyledCarouselItem key={project.id}>
        <StyledImage
          rounded
          className="d-block w-100"
          src={project.image}
          alt="First slide"
        />
        <StyledCarouselCaption>
          <StyledButton variant="primary">
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Preview
            </a>
          </StyledButton>
          <StyledButton variant="primary">
            <a href={project.github} target="_blank" rel="noreferrer">
              Github Sources
            </a>
          </StyledButton>
        </StyledCarouselCaption>
      </StyledCarouselItem>
    );
  });

  return (
    <StyledCarousel
      variant="dark"
      pause="hover"
      fade="true"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {ProjectsCarousel}
    </StyledCarousel>
  );
}

export default ControlledCarousel;

const StyledCarousel = styled(Carousel)`
  margin: 2rem 0;

  @media (max-width: 480px) {
    height: 20rem;
  }

  @media (min-width: 1024px) {
    width: 50rem;
    align-self: center;
  }
`;

const StyledCarouselCaption = styled(Carousel.Caption)`
  margin: 0;
  padding-bottom: 1rem;
  right: 10%;
  left: 10%;
`;

const StyledImage = styled(Image)`
  @media (max-width: 480px) {
    height: 20rem;
    width: 100%;
    object-fit: cover;
  }
`;

const StyledCarouselItem = styled(Carousel.Item)`
  @media (max-width: 480px) {
    height: 100%;
  }
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
    width: 6rem;
    height: 2rem;
  }
`;
