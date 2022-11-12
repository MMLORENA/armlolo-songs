import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import mainTheme from "./mainTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
