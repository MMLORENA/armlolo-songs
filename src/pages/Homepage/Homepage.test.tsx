import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

describe("Given the Homepage page", () => {
  describe("When it's instantiated", () => {
    test("Then it should show 'Homepage' in a heading level 2", () => {
      const title = "Homepage";

      render(<Homepage />);

      const homepageTitle = screen.getByRole("heading", {
        name: title,
        level: 2,
      });

      expect(homepageTitle).toBeInTheDocument();
    });
  });
});
