import { screen } from "@testing-library/react";
import { Song } from "../../store/contexts/types";
import { mockSong } from "../../testUtils/mocks/mockSongsData/mockSongsData";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import paths from "../../utils/paths/paths";
import Layout from "./Layout";

const { base, home } = paths;

describe("Given a Layout Component", () => {
  describe("When it's render in  '/' path", () => {
    test("Then it should show a header with 'Armlolo Songs' title", () => {
      const expectedTitle: string = "Armlolo Songs";

      WrapperRender({
        children: <Layout />,
        renderOptions: { initialEntries: [base] },
      });

      const header = screen.getByRole("heading", { name: expectedTitle });

      expect(header).toBeInTheDocument();
    });
  });

  describe("When it's render in '/home' path and a song", () => {
    test("Then it should show the song title inside", () => {
      WrapperRender({
        children: <Layout />,
        renderOptions: {
          currentState: { songs: [mockSong], songActive: {} as Song },
          initialEntries: [home],
        },
      });

      const songTitle = screen.getByRole("heading", {
        level: 3,
        name: mockSong.title,
      });

      expect(songTitle).toBeInTheDocument();
    });
  });
});
