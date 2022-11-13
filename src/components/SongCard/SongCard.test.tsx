import { render, screen } from "@testing-library/react";
import { mockSong } from "../../mocks/mockSongsData/mockSongsData";
import { Song } from "../../store/contexts/types";
import SongCard from "./SongCard";

describe("Given a SongCard Component", () => {
  const mockSongTest: Song = mockSong;

  describe("When it's render with a song 'Bad Jokes'", () => {
    test("Then it should show a 'Bad Jokes' heading level 3 inside", () => {
      render(<SongCard songPosition={0} song={mockSongTest} />);

      const resultTitle = screen.getByRole("heading", {
        level: 3,
        name: mockSong.title,
      });

      expect(resultTitle).toBeInTheDocument();
    });
  });

  describe("When it's render with a song with an alt text 'Bad Jokes'", () => {
    test("Then it should show a picture with an alt text 'Bad Jokes'", () => {
      render(<SongCard songPosition={0} song={mockSongTest} />);

      const altSong = screen.getByRole("img", {
        name: `Album ${mockSongTest.album}`,
      });

      expect(altSong).toBeInTheDocument();
    });
  });
});
