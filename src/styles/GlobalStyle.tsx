import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

html {
    font-family: "Lexend Deca", sans-serif;
  }

body {
  margin: 0 auto;
}

ul,li {
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
span,
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
