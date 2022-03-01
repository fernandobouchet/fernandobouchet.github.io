import {
  Row,
  Container,
  Form,
  Button,
  FloatingLabel,
  Col,
} from "react-bootstrap";
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
    <FontAwesomeIcon icon={faLinkedin} size="2xl" color="white" />
  );
  const IconTelegram = (
    <FontAwesomeIcon icon={faTelegram} size="2xl" color="white" />
  );
  const IconGithub = (
    <FontAwesomeIcon icon={faGithub} size="2xl" color="white" />
  );
  const IconMail = (
    <FontAwesomeIcon icon={faEnvelope} size="2xl" color="white" />
  );

  return (
    <>
      <StyledContainer id="Contact" fluid>
        <h2>Contact</h2>
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
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" name="name" />
            </Form.Group>
            <Form.Label>Comments</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                name="text"
              />
            </FloatingLabel>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </StyledForm>
        </Row>
        <Row>
          <Col id="contact-buttons">
            <StyledButton variant="dark">
              <a
                href="mailto: fernandobouchet@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {IconMail}
              </a>
            </StyledButton>
            <StyledButton variant="dark">
              <a
                href="https://www.linkedin.com/in/fernando-bouchet"
                target="_blank"
                rel="noreferrer"
              >
                {IconLinkedin}
              </a>
            </StyledButton>
            <StyledButton variant="dark">
              <a
                href="https://t.me/fernandobouchet"
                target="_blank"
                rel="noreferrer"
              >
                {IconTelegram}
              </a>
            </StyledButton>
            <StyledButton variant="dark">
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

const StyledButton = styled(Button)`
  margin: 1rem;
`;

const StyledForm = styled(Form)`
  width: 20rem;
  margin: auto;
`;
