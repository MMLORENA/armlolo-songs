import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

html {
    font-family: "Lexend Deca", sans-serif;
  }

:root {
  --toastify-color-light: ${(props) => props.theme.colors.mainLight};
  --toastify-color-dark:${(props) => props.theme.colors.mainDark};

  --toastify-icon-color-info: ${(props) => props.theme.colors.secondaryColor};
  --toastify-icon-color-success: ${(props) =>
    props.theme.colors.secondaryColor};
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: ${(props) => props.theme.colors.primaryColor};

  --toastify-toast-width: 320px;
  --toastify-toast-background: ${(props) => props.theme.colors.mainLight};
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: inherit;
  --toastify-z-index: 9;

  --toastify-text-color-light: ${(props) => props.theme.colors.secondaryColor};
  --toastify-text-color-dark: ${(props) => props.theme.colors.primaryColor};

  --toastify-color-progress-light:${(props) =>
    props.theme.colors.secondaryColor}; 
  --toastify-color-progress-dark:${(props) =>
    props.theme.colors.secondaryColor};
  --toastify-color-progress-info: ${(props) =>
    props.theme.colors.secondaryColor};
  --toastify-color-progress-success: ${(props) =>
    props.theme.colors.secondaryColor};
  --toastify-color-progress-error: ${(props) =>
    props.theme.colors.primaryColor};
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
