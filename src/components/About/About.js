import { Row, Container } from "react-bootstrap";
import styled from "styled-components";

function About() {
  return (
    <>
      <StyledContainer>
        <Row>
          <h1>Hi, I'm Fernando</h1>
          <p>
            I'm from Buenos Aires, Argentina, computing enthusiast, currently
            I'm studying a degree in computing at UNAHUR university, I am also
            learning self-taught way React while still working as a manager in a
            furniture factory. I'm an android fan and build my own custom kernel
            for the devices I owned and share it with the community. I love
            spending time with my family, travel, play videogames, watch soccer
            games and movies. I am looking for an IT job where I can show my
            skills and to keep getting more knowledge. My goal is to become a
            Full stack developer.
          </p>
        </Row>
        <Row>
          <h2>My skills</h2>
          <div id="skills-icons">
            <i className="fab skills fa-git-square fa-5x" title="GITHUB"></i>
            <i className="fab skills fa-html5 fa-5x" title="HTML5"></i>
            <i className="fab skills fa-css3-alt fa-5x" title="CSS"></i>
            <i className="fab skills fa-js fa-5x" title="JAVASCRIPT"></i>
            <i
              className="fab skills fa-brands fa-react fa-5x"
              title="REACT"
            ></i>
          </div>
        </Row>
      </StyledContainer>
    </>
  );
}

export default About;

const StyledContainer = styled(Container)`
  height: 100vh;
  text-align: center;
  padding: 1rem;
`;
