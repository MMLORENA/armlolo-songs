import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/lexend-deca";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import mainTheme from "./styles/mainTheme";
import SongsContextProvider from "./store/contexts/SongsContext/SongsContextProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SongsContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </SongsContextProvider>
  </React.StrictMode>
);
