import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wrappedRender } from "../../testUtils/wrappedRender";
import AddSong from "./AddSong";

describe("Given the Add Song component", () => {
  describe("When it's render", () => {
    test("Then should show an input with 'Click here to provide a song' as label text", () => {
      wrappedRender(<AddSong />);

      const audioInput = screen.getByLabelText("Click here to provide a song");

      expect(audioInput).toBeInTheDocument();
    });

    test("Then if the user add an input it should show a text with the name od the input", () => {
      wrappedRender(<AddSong />);

      const audioInput = screen.getByLabelText("Click here to provide a song");

      const songName = "async.mp3";
      const fakeSong = new File([], songName);

      userEvent.upload(audioInput, fakeSong);

      const songNameDocument = screen.queryByText(songName);

      expect(songNameDocument).toBeInTheDocument();
    });
  });
});
