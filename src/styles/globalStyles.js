import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   html {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  body{
    margin: 0px;
    padding: 0px;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    font-family: 'Poppins';
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
    outline: 0;
  }

  
  :root{
      --primary: #E4212D;
     --background: #fff;
  }

`

export default GlobalStyle;