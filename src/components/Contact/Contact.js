import { Row, Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const IconLinkedin = (
    <FontAwesomeIcon icon={faLinkedin} className="fa-2x" color="silver" />
  );
  const IconTelegram = (
    <FontAwesomeIcon icon={faTelegram} className="fa-2x" color="silver" />
  );
  const IconGithub = (
    <FontAwesomeIcon icon={faGithub} className="fa-2x" color="silver" />
  );
  const IconMail = (
    <FontAwesomeIcon icon={faEnvelope} className="fa-2x" color="silver" />
  );

  return (
    <>
      <StyledContainer id="Contact" fluid>
        <h2>Contact me</h2>
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
          <StyledButton>
            <a
              href="mailto: fernandobouchet@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {IconMail}
            </a>
          </StyledButton>
          <StyledButton>
            <a
              href="https://www.linkedin.com/in/fernando-bouchet"
              target="_blank"
              rel="noreferrer"
            >
              {IconLinkedin}
            </a>
          </StyledButton>
          <StyledButton>
            <a
              href="https://t.me/fernandobouchet"
              target="_blank"
              rel="noreferrer"
            >
              {IconTelegram}
            </a>
          </StyledButton>
          <StyledButton>
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
    </>
  );
}

export default Contact;

const StyledContainer = styled(Container)`
  background-color: #1d1f23;
  color: silver;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
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
    transform: scale(1.1);
    color: #2f353c;
  }
`;

const StyledForm = styled(Form)`
  width: 20rem;
  margin: 2rem auto;
`;

const StyledFormControl = styled(Form.Control)`
  background-color: #17191c;
  width: 15rem;
  resize: none;
  margin: auto;
  border-color: grey;
  color: silver;

  &:focus {
    background-color: #17191c;
    color: white;
  }
`;
