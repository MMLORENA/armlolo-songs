import { screen } from "@testing-library/react";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import Header from "./Header";

describe("Given the Header Component", () => {
  describe("When it's render", () => {
    test("Then should show a 'Music Addicts' in a heading level 1", () => {
      const expectedTitle = "Armlolo Songs";

      WrapperRender({ children: <Header />, renderOptions: {} });

      const resultTitle = screen.getByRole("heading", {
        level: 1,
        name: expectedTitle,
      });

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
