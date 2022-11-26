import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import Button from "./Button";

describe("Given the Button component", () => {
  const textButton = "Delete";

  describe("When it receives text 'Delete'", () => {
    test("Then should show 'Delete' inside the button", () => {
      WrapperRender({
        view: <Button text={textButton} action={() => {}} type="button" />,
        renderOptions: {},
      });

      const button = screen.queryByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action and user click the button", () => {
    test("Then the received action should be called", async () => {
      const mockAction = jest.fn();

      WrapperRender({
        view: <Button text="Test" action={mockAction} type="button" />,
        renderOptions: {},
      });

      const button = screen.getByRole("button", { name: "Test" });
      await userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
