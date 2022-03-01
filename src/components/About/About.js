import { Row, Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitSquare,
  faReact,
  faHtml5,
  faJs,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import { nanoid } from "nanoid";

function About() {
  const IconGithub = (
    <FontAwesomeIcon icon={faGitSquare} title="Github" size="2xl" />
  );

  const IconReact = <FontAwesomeIcon icon={faReact} title="React" size="2xl" />;
  const IconHtml = <FontAwesomeIcon icon={faHtml5} title="Html 5" size="2xl" />;
  const IconJs = <FontAwesomeIcon icon={faJs} title="Javascript" size="2xl" />;
  const IconCss = <FontAwesomeIcon icon={faCss3Alt} title="Css 3" size="2xl" />;

  const Icons = [IconGithub, IconHtml, IconCss, IconJs, IconReact];

  const SkillIcons = Icons.map((icon) => {
    return <div key={nanoid()}>{icon}</div>;
  });

  return (
    <>
      <StyledContainer id="About" fluid>
        <Row>
          <h1>Hi, I'm Fernando</h1>
          <p>
            I'm from Buenos Aires, Argentina, computer and technology fan,
            currently studying a technical degree in programming at UNAHUR
            university, I am also learning self-taught way React while still
            working as a manager in a furniture factory. I'm an android fan and
            build my own custom kernel for the devices I own and share it with
            the community. I love spending time with my family, travel, play
            videogames, watch soccer games and movies. I am looking for an IT
            job where I can show my skills and to keep getting more knowledge.
            My goal is to become a Full stack JS developer.
          </p>
        </Row>
        <Row>
          <h2>My skills</h2>
          <StyledRowIcons>{SkillIcons}</StyledRowIcons>
        </Row>
      </StyledContainer>
    </>
  );
}

export default About;

const StyledContainer = styled(Container)`
  background-color: #070708;
  color: silver;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
`;

const StyledRowIcons = styled(Col)`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
`;
