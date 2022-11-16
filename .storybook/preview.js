import { ThemeProvider } from "styled-components";
import mainTheme from "../src/styles/mainTheme";
import GlobalSyle from "../src/styles/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalSyle />
      <Story />
    </ThemeProvider>
  ),
];
