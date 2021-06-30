import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  ul {
    list-style-type: none;
  }

  a, a:hover, a:visited {
    text-decoration: none;
    outline: none;
    border: none;
    color: inherit;
  }

  input, input:focus, input:active{
    outline: none;
    /* border: none; */
  }

  button{
    outline: none;
  }

`

export default GlobalStyle