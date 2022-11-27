import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WrapperProps } from "../../testUtils/wrappers/types/types";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import AddSong from "./AddSong";

const mockAddSong = jest.fn();

jest.mock("../../hooks/useSong", () => () => ({
  addSong: mockAddSong,
}));

describe("Given the Add Song component", () => {
  describe("When it's render", () => {
    const componentWithOptions: WrapperProps = {
      children: <AddSong />,
      renderOptions: {},
    };

    test("Then should show an input with 'Click here to provide a song' as label text", () => {
      WrapperRender(componentWithOptions);

      const audioInput = screen.getByLabelText("Click here to provide a song");

      expect(audioInput).toBeInTheDocument();
    });

    test("Then if the user add an input it should show a text with the name od the input", () => {
      WrapperRender(componentWithOptions);

      const audioInput = screen.getByLabelText("Click here to provide a song");

      const songName = "async.mp3";
      const fakeSong = new File([], songName);

      userEvent.upload(audioInput, fakeSong);

      const songNameDocument = screen.queryByText(songName);

      expect(songNameDocument).toBeInTheDocument();
    });

    describe("And the user click on 'Send Song' button without a song loaded", () => {
      test("Then add song shouldn't be called", async () => {
        WrapperRender(componentWithOptions);

        const submitButton = screen.getByRole("button", { name: "Send Song" });

        userEvent.click(submitButton);

        expect(mockAddSong).not.toHaveBeenCalled();
      });
    });

    describe("And the user send the song after select it", () => {
      test("Then it should call the add song function with the uploaded song", () => {
        WrapperRender(componentWithOptions);

        const audioInput = screen.getByLabelText(
          "Click here to provide a song"
        );

        const songName = "async.mp3";
        const fakeSong = new File([], songName);

        userEvent.upload(audioInput, fakeSong);

        const submitButton = screen.getByRole("button", { name: "Send Song" });

        userEvent.click(submitButton);

        expect(mockAddSong).toHaveBeenCalledWith(fakeSong);
      });
    });
  });
});
