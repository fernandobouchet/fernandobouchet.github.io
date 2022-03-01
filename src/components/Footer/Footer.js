import styled from "styled-components";

function FooterContainer() {
  return (
    <>
      <StyledFooter>
        <span>Made by Fernando Bouchet - {new Date().getFullYear()} </span>
      </StyledFooter>
    </>
  );
}

export default FooterContainer;

const StyledFooter = styled.footer`
  height: 1.5rem;
  background-color: #070708;
  text-align: center;
  color: silver;
  font-size: 0.8rem;
`;
