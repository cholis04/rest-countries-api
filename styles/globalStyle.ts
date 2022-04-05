import { createGlobalStyle } from 'styled-components';

// Global Style
export const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nunito Sans', sans-serif;
    background-color:${(props) => props.theme.backgroundColor};
    transition:all .2s ease-in-out;
  }
  img {
    display: block;
    max-width: 100%;
  }
  a {
    text-decoration: none;
  }
`;
