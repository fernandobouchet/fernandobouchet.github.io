import { Row, Container, Col, Button } from "react-bootstrap";
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
    <StyledFontAwesomeIcon
      icon={faGitSquare}
      title="Github"
      className="fa-2x"
    />
  );

  const IconReact = (
    <StyledFontAwesomeIcon icon={faReact} title="React" className="fa-2x" />
  );
  const IconHtml = (
    <StyledFontAwesomeIcon icon={faHtml5} title="Html 5" className="fa-2x" />
  );
  const IconJs = (
    <StyledFontAwesomeIcon icon={faJs} title="Javascript" className="fa-2x" />
  );
  const IconCss = (
    <StyledFontAwesomeIcon icon={faCss3Alt} title="Css 3" className="fa-2x" />
  );

  const Icons = [IconGithub, IconHtml, IconCss, IconJs, IconReact];

  const SkillIcons = Icons.map((icon) => {
    return <StyledIconContainer key={nanoid()}>{icon}</StyledIconContainer>;
  });

  return (
    <>
      <StyledContainer id="About" fluid>
        <Row>
          <Styledh1>Hi, I'm Fernando</Styledh1>
          <p>
            I'm a <StyledSpan>frontend developer</StyledSpan>, currently
            studying a technical degree in programming while I'm learning
            self-taught.
            <br />
            I'm looking for a job where I can showcase my skills and continue
            learning more.
            <br />
            My goal is to become a Full Stack JS developer.
          </p>
        </Row>
        <Row>
          <h2>My skills</h2>
          <StyledRowIcons>{SkillIcons}</StyledRowIcons>
        </Row>
        <div>
          <Button variant="primary" size="lg">
            <StyledAnchor
              href="https://drive.google.com/file/d/17b35ZLaDUIMIkJgrgb3vkW_5C7VhqtDL/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Get CV
            </StyledAnchor>
          </Button>
        </div>
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
  padding: 0 10rem;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const StyledRowIcons = styled(Col)`
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10rem;
  height: 4rem;

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const StyledSpan = styled.span`
  color: #376ffd;
`;

const StyledAnchor = styled.a`
  color: silver;
  text-decoration: none;

  &:hover {
    color: silver;
  }
`;

const Styledh1 = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
`;

const StyledIconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin: auto 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    color: #2f353c;
  }
`;
