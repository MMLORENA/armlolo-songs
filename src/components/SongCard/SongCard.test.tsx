import { render, screen } from "@testing-library/react";
import { mockSong } from "../../mocks/mockSongsData/mockSongsData";
import { Song } from "../../store/contexts/types";
import SongCard from "./SongCard";

describe("Given a SongCard Component", () => {
  const mockSongTest: Song = mockSong;

  describe("When it's render with a song", () => {
    test("Then it should show a it title received in a heading level 3 inside", () => {
      render(<SongCard songPosition={0} song={mockSongTest} />);

      const resultTitle = screen.getByRole("heading", {
        level: 3,
        name: mockSong.title,
      });

      expect(resultTitle).toBeInTheDocument();
    });
  });

  describe("When it's render with a song with an alt image", () => {
    test("Then it should show a picture with the alt received", () => {
      render(<SongCard songPosition={0} song={mockSongTest} />);

      const altSong = screen.getByRole("img", {
        name: `Album ${mockSongTest.album}`,
      });

      expect(altSong).toBeInTheDocument();
    });
  });
});
