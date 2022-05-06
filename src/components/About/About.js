import { Row, Container, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGitSquare,
  faReact,
  faHtml5,
  faJs,
  faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import { nanoid } from 'nanoid';
import { Fade } from 'react-awesome-reveal';

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
    <Fade duration={2000} fraction="0.1">
      <Container fluid>
        <StyledContainer id="About" fluid>
          <Row>
            <Styledh1>Hi, I'm Fernando</Styledh1>
            <StyledP>
              I'm a <StyledSpan>frontend developer</StyledSpan>, at present
              studying a technical degree in programming <br />
              while I'm learning self-taught, currently learning Typescript and
              improving my React skills.
              <br />
              I'm looking for my first professional experience in the IT world.
            </StyledP>
          </Row>
          <Row>
            <h2>My skills</h2>
            <StyledRowIcons>{SkillIcons}</StyledRowIcons>
          </Row>
          <Container>
            <Button variant="primary" size="lg">
              <StyledAnchor
                href="https://drive.google.com/file/d/17b35ZLaDUIMIkJgrgb3vkW_5C7VhqtDL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Get CV
              </StyledAnchor>
            </Button>
          </Container>
        </StyledContainer>
      </Container>
    </Fade>
  );
}

export default About;

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  max-width: 80rem;
  padding-top: 4rem;
  max-width: 1200px;
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
  color: white;
  text-decoration: none;

  &:hover {
    color: silver;
  }
`;

const Styledh1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
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
  }
`;
