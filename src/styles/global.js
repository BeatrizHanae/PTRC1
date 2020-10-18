import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: #FFF;
    color: #000;
  }

  body, input, button, html {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  a:hover{
    opacity: 0.8;
  }
`;

export default GlobalCss;
