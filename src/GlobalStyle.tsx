import { createGlobalStyle } from "styled-components";
import "@fontsource/lexend-deca";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0 auto; 
  }

html {
    font-family: "Lexend Deca", sans-serif;;
  }

ul {
    list-style: none;
    list-style-position: outside;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

button, a {
  @media (min-width: 768px) {
    cursor: pointer;
  }
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
