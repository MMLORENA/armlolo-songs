import { screen } from "@testing-library/react";
import { Song } from "../../store/contexts/types";
import {
  mockListSong,
  mockSong,
} from "../../testUtils/mocks/mockSongsData/mockSongsData";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import Homepage from "./Homepage";

describe("Given the Homepage page", () => {
  describe("When it's instantiated", () => {
    test("Then it should show 'Homepage' in a heading level 2", () => {
      const title = "Homepage";

      WrapperRender({ children: <Homepage />, renderOptions: {} });

      const homepageTitle = screen.getByRole("heading", {
        name: title,
        level: 2,
      });

      expect(homepageTitle).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with a song", () => {
    test("Then is should show the title song in Song Player", () => {
      WrapperRender({
        children: <Homepage />,
        renderOptions: { currentState: { songs: [], songActive: mockSong } },
      });

      const songPlayerTitle = screen.getByText(mockSong.title);

      expect(songPlayerTitle).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with songs", () => {
    test("Then is should show the title song in Song Player in a heading level 3", () => {
      WrapperRender({
        children: <Homepage />,
        renderOptions: {
          currentState: { songs: mockListSong, songActive: {} as Song },
        },
      });

      const songListTitle = screen.getByRole("heading", {
        name: mockListSong[0].title,
        level: 3,
      });

      expect(songListTitle).toBeInTheDocument();
    });
  });
});
