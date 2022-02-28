import { Row, Container, Form, Button, FloatingLabel } from "react-bootstrap";
import styled from "styled-components";

function Contact() {
  return (
    <>
      <StyledContainer id="Contact">
        <h2>Contact</h2>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Label>Comments</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        <Row>
          <div id="contact-buttons">
            <button id="button-mail" className="buttons" aria-hidden="true">
              <a
                href="mailto: fernandobouchet@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </button>
            <button id="button-linkedin" className="buttons" aria-hidden="true">
              <a
                href="https://www.linkedin.com/in/fernando-bouchet"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </button>
            <button id="button-telegram" className="buttons" aria-hidden="true">
              <a
                href="https://t.me/fernandobouchet"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-telegram"></i>
              </a>
            </button>
            <button id="button-github" className="buttons" aria-hidden="true">
              <a
                href="https://github.com/fernandobouchet"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </button>
          </div>
        </Row>
      </StyledContainer>
    </>
  );
}

export default Contact;

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 1rem;
`;
