import { screen } from "@testing-library/react";
import { mockSong } from "../../testUtils/mocks/mockSongsData/mockSongsData";
import { Song } from "../../store/contexts/types";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import SongCard from "./SongCard";
import userEvent from "@testing-library/user-event";

const mockAddActiveSong = jest.fn();

jest.mock("../../hooks/useSong", () => () => ({
  addActiveSong: mockAddActiveSong,
}));

describe("Given a SongCard Component", () => {
  const mockSongTest: Song = mockSong;
  const componentWithOptions = {
    view: <SongCard songPosition={0} song={mockSongTest} />,
    renderOptions: {},
  };

  describe("When it's render with a song", () => {
    test("Then it should show a it title received in a heading level 3 inside", () => {
      WrapperRender(componentWithOptions);

      const resultTitle = screen.getByRole("heading", {
        level: 3,
        name: mockSong.title,
      });

      expect(resultTitle).toBeInTheDocument();
    });

    describe("And the user click on the song image", () => {
      test("Then it should call the addActiveSong function", async () => {
        WrapperRender(componentWithOptions);

        const altSong = screen.getByRole("img", {
          name: `Album ${mockSongTest.album}`,
        });

        await userEvent.click(altSong);

        expect(mockAddActiveSong).toHaveBeenCalled();
      });
    });
  });

  describe("When it's render with a song with an alt image", () => {
    test("Then it should show a picture with the alt received", () => {
      WrapperRender(componentWithOptions);

      const altSong = screen.getByRole("img", {
        name: `Album ${mockSongTest.album}`,
      });

      expect(altSong).toBeInTheDocument();
    });
  });
});
