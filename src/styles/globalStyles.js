import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --r400: #BF2600;
    --n10: #FAFBFC;
    --n40: #DFE1E6;
    --n400: #505F79;
    --n900: #091E42;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--n10);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
