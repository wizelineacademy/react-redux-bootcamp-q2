import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  html, body, #root{
    height: 100%;
  }
`;

export default GlobalStyle;
