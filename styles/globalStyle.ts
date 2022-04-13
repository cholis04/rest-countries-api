import { createGlobalStyle } from 'styled-components';

// Global Style
export const GlobalStyle = createGlobalStyle`
  :root {
    /* Global */
    --smallShadow: ${(props) => props.theme.smallShadow};
    --maxWidth:${(props) => props.theme.maxWidth};
    --minWidth:${(props) => props.theme.minWidth};
    /* Global */

    /* Default Light */
    --backgroundColor: ${(props) => props.theme.light.backgroundColor};
    --elementColor:${(props) => props.theme.light.elementColor};
    --textColor: ${(props) => props.theme.light.textColor};
    --textValue: ${(props) => props.theme.light.textValue};
    --textPlaceHolder: ${(props) => props.theme.light.textPlaceHolder};
    /* Default Light */
  }
  
  /* Default System Detect */
  /* @media (prefers-color-scheme: dark) {} */

  /* [data-theme='dark']:root { */
    /* Dark */
    /* --backgroundColor: ${(props) => props.theme.dark.backgroundColor};
    --elementColor:${(props) => props.theme.dark.elementColor};
    --textColor: ${(props) => props.theme.dark.textColor};
    --textValue: ${(props) => props.theme.dark.textValue};
    --textPlaceHolder: ${(props) => props.theme.dark.textPlaceHolder}; */
    /* Dark */
  /* } */

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
    background-color:var(--backgroundColor);
    transition:all .2s ease-in-out;
    min-width: var(--minWidth);
  }

  body[data-theme='dark'] {

    --backgroundColor: ${(props) => props.theme.dark.backgroundColor};
    --elementColor:${(props) => props.theme.dark.elementColor};
    --textColor: ${(props) => props.theme.dark.textColor};
    --textValue: ${(props) => props.theme.dark.textValue};
    --textPlaceHolder: ${(props) => props.theme.dark.textPlaceHolder};

    background-color:var(--backgroundColor);
  }
  img {
    display: block;
    max-width: 100%;
  }
  a {
    text-decoration: none;
  }

  button,input, select {
    font-family: 'Nunito Sans', sans-serif;
  }
`;
