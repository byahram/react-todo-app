import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    text-rendering: optimizeLegibility;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    background-color: #e5e7eb;
    color: #213547;
  }
  
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: none;
  }
  a:hover {
    color: #535bf2;
  }
  
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  
  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;

export default GlobalStyle;
