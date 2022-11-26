import { screen } from "@testing-library/react";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import Heading from "./Heading";
import { HeadingLevel } from "./types";

describe("Given the Heading Component", () => {
  describe("When it's render with 1 and 'Hello'", () => {
    test("Then it should show a heading level 1 with a text 'Hello' inside", () => {
      const level: HeadingLevel = 1;
      const text: string = "Hello";

      WrapperRender({
        children: <Heading level={level} children={text} className="" />,
        renderOptions: {},
      });
      const resultTitle = screen.getByRole("heading", {
        level: level,
        name: text,
      });

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
