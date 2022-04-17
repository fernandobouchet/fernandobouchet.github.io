import styled from "styled-components";

function FooterContainer() {
  return (
    <>
      <StyledFooter>
        <span>© Fernando Bouchet - {new Date().getFullYear()} </span>
      </StyledFooter>
    </>
  );
}

export default FooterContainer;

const StyledFooter = styled.footer`
  height: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
`;
