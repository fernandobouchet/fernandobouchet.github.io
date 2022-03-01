import { Row, Container, Form, Button, Col } from "react-bootstrap";
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
    <FontAwesomeIcon icon={faLinkedin} className="fa-3x" color="white" />
  );
  const IconTelegram = (
    <FontAwesomeIcon icon={faTelegram} className="fa-3x" color="white" />
  );
  const IconGithub = (
    <FontAwesomeIcon icon={faGithub} className="fa-3x" color="white" />
  );
  const IconMail = (
    <FontAwesomeIcon icon={faEnvelope} className="fa-3x" color="white" />
  );

  return (
    <>
      <StyledContainer id="Contact" fluid>
        <StyledH2>Contact me</StyledH2>
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
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="name" placeholder="Enter name" name="name" />
            </Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Enter message"
              name="text"
              style={{ height: "10rem", resize: "none" }}
            />
            <StyledSubmitButton variant="primary" type="submit" size="lg">
              Send message!
            </StyledSubmitButton>
          </StyledForm>
        </Row>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
}

export default Contact;

const StyledContainer = styled(Container)`
  background-color: #0d1118;
  color: aliceblue;
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

const StyledButton = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  transition: 0.1s linear;
  margin: 0 0.3rem;

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

  .Control {
    resize: none;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2.5rem;
`;
