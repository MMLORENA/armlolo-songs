import { screen } from "@testing-library/react";
import Header from "./Header";
import { wrappedRender } from "../../testUtils/wrappedRender";

describe("Given the Header Component", () => {
  describe("When it's render", () => {
    test("Then should show a 'Music Addicts' in a heading level 1", () => {
      const expectedTitle = "Music Addicts";

      wrappedRender(<Header />);

      const resultTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
