import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the Button component", () => {
  const textButton = "Delete";

  describe("When it receives text 'Delete'", () => {
    test("Then should show 'Delete' inside the button", () => {
      render(<Button text={textButton} action={() => {}} />);

      const button = screen.queryByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action and user click the button", () => {
    test("Then the received action should be called", async () => {
      const mockAction = jest.fn();

      render(<Button text="Test" action={mockAction} />);

      const button = screen.getByRole("button", { name: "Test" });
      await userEvent.click(button);

      expect(mockAction).toHaveBeenCalled();
    });
  });
});
