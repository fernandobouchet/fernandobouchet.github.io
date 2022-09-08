import { Row, Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';

function Contact(props) {
  const { theme } = props;

  const IconLinkedin = (
    <FontAwesomeIcon
      icon={faLinkedin}
      className="fa-2x"
      color={theme === 'light' ? '#242930' : '#f0f6fd'}
      title="Linkedin Icon"
    />
  );
  const IconTelegram = (
    <FontAwesomeIcon
      icon={faTelegram}
      className="fa-2x"
      color={theme === 'light' ? '#242930' : '#f0f6fd'}
      title="Telegram Icon"
    />
  );
  const IconGithub = (
    <FontAwesomeIcon
      icon={faGithub}
      className="fa-2x"
      color={theme === 'light' ? '#242930' : '#f0f6fd'}
      title="Github Icon"
    />
  );
  const IconMail = (
    <FontAwesomeIcon
      icon={faEnvelope}
      className="fa-2x"
      color={theme === 'light' ? '#242930' : '#f0f6fd'}
      title="Email Icon"
    />
  );

  return (
    <Fade duration={2000} fraction="0.1">
      <MainContainer fluid>
        <StyledContainer id="Contact" fluid>
          <ContactTitle>Contact me</ContactTitle>
          <Row>
            <StyledForm
              action="https://formsubmit.co/b0b332c987f92be7b0fb5ad3079d5478"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_next"
                value="https://fernandobouchet.github.io"
              />
              <input
                type="hidden"
                name="_subject"
                value="Check it! Someone wants to contact you!"
              />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <StyledFormControl
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <StyledFormControl
                  type="name"
                  placeholder="Enter name"
                  name="name"
                />
              </Form.Group>
              <StyledFormControl
                as="textarea"
                placeholder="Enter message"
                name="text"
              />
              <StyledSubmitButton variant="primary" type="submit">
                Send message!
              </StyledSubmitButton>
            </StyledForm>
          </Row>
          <IconsContainer>
            <StyledButton aria-label="mail">
              <a
                href="mailto: fernandobouchet@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {IconMail}
              </a>
            </StyledButton>
            <StyledButton aria-label="linkedin">
              <a
                href="https://www.linkedin.com/in/fernando-bouchet"
                target="_blank"
                rel="noreferrer"
              >
                {IconLinkedin}
              </a>
            </StyledButton>
            <StyledButton aria-label="telegram">
              <a
                href="https://t.me/fernandobouchet"
                target="_blank"
                rel="noreferrer"
              >
                {IconTelegram}
              </a>
            </StyledButton>
            <StyledButton aria-label="github">
              <a
                href="https://github.com/fernandobouchet"
                target="_blank"
                rel="noreferrer"
              >
                {IconGithub}
              </a>
            </StyledButton>
          </IconsContainer>
        </StyledContainer>
      </MainContainer>
    </Fade>
  );
}

export default Contact;

const MainContainer = styled(Container)``;

const ContactTitle = styled.h2``;

const StyledContainer = styled(Container)`
  height: calc(100vh - 1.5rem);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  max-width: 80rem;
  padding-top: 4rem;
`;

const StyledSubmitButton = styled(Button)`
  margin-top: 1.5rem;
`;

const IconsContainer = styled(Row)`
  margin: 0 auto;
  height: 5rem;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  transition: 0.1s linear;
  width: 4rem;
  height: 4rem;

  &:hover {
    background-color: transparent;
    border-color: transparent;
    transform: scale(1.2);
    color: #2f353c;
  }
`;

const StyledForm = styled(Form)`
  width: 20rem;
  margin: 2rem auto;
`;

const StyledFormControl = styled(Form.Control)`
  background-color: inherit;
  color: inherit;
  width: 15rem;
  resize: none;
  margin: auto;
  border-color: grey;
  border-radius: 5px;
  padding: 6px 12px;

  &:focus {
    background-color: inherit;
    color: inherit;
    box-shadow: inherit;
    border-color: inherit;
  }
`;
