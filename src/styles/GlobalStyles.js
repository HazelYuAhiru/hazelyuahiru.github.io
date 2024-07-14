import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f0f0;
    color: #333;
    font-family: 'Arial', sans-serif;
  }

  .dark-theme {
    background-color: #1a1a1a;
    color: #f0f0f0;
  }
`;

export default GlobalStyles;