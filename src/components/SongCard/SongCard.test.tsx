import { screen } from "@testing-library/react";
import { mockSong } from "../../testUtils/mocks/mockSongsData/mockSongsData";
import { Song } from "../../store/contexts/types";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import SongCard from "./SongCard";

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
