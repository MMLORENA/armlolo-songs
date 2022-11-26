import { screen } from "@testing-library/react";
import SongsList from "./SongsList";
import { mockListSong } from "../../testUtils/mocks/mockSongsData/mockSongsData";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import initialSongsContextState from "../../store/contexts/SongsContext/initialSongsState/initialSongState";

describe("Given a SongsList Component", () => {
  describe("When it's render with any list of songs", () => {
    test("Then it should show 'No songs available' as a text inside", () => {
      const expectedText = "No songs available";

      WrapperRender({
        view: <SongsList />,
        renderOptions: { currentState: initialSongsContextState },
      });
      const resultText = screen.getByText(expectedText);

      expect(resultText).toBeInTheDocument();
    });
  });

  describe("When it's render with a list of 2 songs", () => {
    const mockSongsList = mockListSong;
    const componentWithOptions = { view: <SongsList />, renderOptions: {} };

    test("Then it should show 2 titles songs in a heading level 3 inside", () => {
      WrapperRender(componentWithOptions);

      const resultHeadingOne = screen.getByRole("heading", {
        level: 3,
        name: mockSongsList[0].title,
      });
      const resultHeadingTwo = screen.getByRole("heading", {
        level: 3,
        name: mockSongsList[1].title,
      });

      expect(resultHeadingOne).toBeInTheDocument();
      expect(resultHeadingTwo).toBeInTheDocument();
    });

    test("Then it should show 2 pictures of the songs", () => {
      WrapperRender(componentWithOptions);

      const resultAltSongOne = screen.getByRole("img", {
        name: `Album ${mockListSong[0].album}`,
      });
      const resultAltSongTwo = screen.getByRole("img", {
        name: `Album ${mockListSong[1].album}`,
      });

      expect(resultAltSongOne).toBeInTheDocument();
      expect(resultAltSongTwo).toBeInTheDocument();
    });
  });
});
