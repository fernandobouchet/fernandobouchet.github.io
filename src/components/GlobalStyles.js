import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  span,a {
    color: ${({ theme }) => theme.textSpan};
  };
  footer > span {
    color: grey;
  }
  `;
