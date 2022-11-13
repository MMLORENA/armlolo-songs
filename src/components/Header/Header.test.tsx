import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import mainTheme from "../../styles/mainTheme";

describe("Given the Header Component", () => {
  describe("When it's render", () => {
    test("Then should show a 'Music Addicts' in a heading level 1", () => {
      const expectedTitle = "Music Addicts";

      render(
        <ThemeProvider theme={mainTheme}>
          <Header />
        </ThemeProvider>
      );

      const resultTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
