import {
  addActiveSongActionCreator,
  deleteSongActionCreator,
} from "../store/actions/actionsSongs/actionsCreatorSongs";
import { Song } from "../store/contexts/types";
import mockDispatch from "../testUtils/mocks/mockDispatch/mockDispatch";
import { mockSong } from "../testUtils/mocks/mockSongsData/mockSongsData";
import { mockStructureSongsData } from "../testUtils/mocks/mockStructureSongsData/mockStrutureSongsData";
import WrapperRenderHook from "../testUtils/wrappers/WrapperRenderHook";
import useSong from "./useSong";
import mockToastify from "../testUtils/mocks/mockToastify/mockToastify";

jest.mock("music-metadata-browser", () => ({
  ...jest.requireActual("music-metadata-browser"),
  parseBlob: () => ({
    common: { title: "", album: "", artist: "", picture: [{ data: "" }] },
    format: { duration: "" },
  }),
}));

describe("Given the useSong custom hook function", () => {
  describe("When addSong it's called with a music file", () => {
    test("Then dispatch has to been called with the music info", async () => {
      jest.useFakeTimers();

      const expectedToastifyMessage =
        "🎶 Your Song has been added successfully";

      const fileReaderSpy = jest.spyOn(global, "FileReader").mockImplementation(
        (): FileReader => ({
          ...FileReader.prototype,
          readAsDataURL: jest.fn(),
          result: "",
        })
      );

      const expectedPayload = {
        type: "addSong",
        payload: {
          artist: "",
          audio: "",
          id: `${Date.now()}`,
          picture: "",
          time: "",
          title: "",
          album: "",
        },
      };

      const { result } = WrapperRenderHook({
        customHook: useSong,
        renderOptions: { dispatch: mockDispatch },
      });

      await result.current.addSong(new File([], ""));

      URL.createObjectURL = jest.fn().mockReturnValue("");
      const reader = fileReaderSpy.mock.results[0].value;
      reader.onloadend!({} as ProgressEvent<FileReader>);

      expect(mockDispatch).toHaveBeenCalledWith(expectedPayload);
      expect(mockToastify.success).toHaveBeenCalledWith(
        expectedToastifyMessage
      );
    });
  });

  describe("When addActiveSong it's called with a song", () => {
    test("Then dispatch has to been called with the music info", () => {
      const expectedPayload = {
        type: "addActiveSong",
        payload: mockSong,
      };

      const { result } = WrapperRenderHook({
        customHook: useSong,
        renderOptions: { dispatch: mockDispatch },
      });

      result.current.addActiveSong(mockSong);

      expect(mockDispatch).toHaveBeenCalledWith(expectedPayload);
    });
  });

  describe("When nextSong it's called", () => {
    describe("And receives an id of first song from list of songs", () => {
      test("Then dispatch must to be called with second song from list of songs", () => {
        const actualIdSong = mockStructureSongsData.songs[0].id;
        const expectedSongActiveAction = addActiveSongActionCreator(
          mockStructureSongsData.songs[1]
        );

        const { result } = WrapperRenderHook({
          customHook: useSong,
          renderOptions: {
            currentState: mockStructureSongsData,
            dispatch: mockDispatch,
          },
        });

        result.current.nextSong(actualIdSong);

        expect(mockDispatch).toHaveBeenCalledWith(expectedSongActiveAction);
      });
    });

    describe("And receives an id of last song from list of songs", () => {
      test("Then dispatch must to be called with empty song", () => {
        const actualIdSong = mockStructureSongsData.songs[1].id;
        const expectedSongActiveAction = addActiveSongActionCreator({} as Song);

        const { result } = WrapperRenderHook({
          customHook: useSong,
          renderOptions: {
            currentState: mockStructureSongsData,
            dispatch: mockDispatch,
          },
        });

        result.current.nextSong(actualIdSong);

        expect(mockDispatch).toHaveBeenCalledWith(expectedSongActiveAction);
      });
    });
  });

  describe("When addActiveSong it's called without a song", () => {
    test("Then notify error should haven been called with '🔇 Oops!, something went wrong'", async () => {
      const expectedToastifyErrorMessage = "🔇 Oops!, something went wrong";

      const { result } = WrapperRenderHook({
        customHook: useSong,
        renderOptions: { dispatch: mockDispatch },
      });

      await result.current.addSong(new File([], ""));

      expect(mockToastify.error).toHaveBeenCalledWith(
        expectedToastifyErrorMessage
      );
    });
  });

  describe("When deleteSong it's called with a id song", () => {
    test("Then dispatch should have been called with 'deleteSonActionCreator' with the song id", async () => {
      const idSong = mockStructureSongsData.songs[0].id;
      const expectedDeleteSongActionCreator = deleteSongActionCreator(idSong);

      const { result } = WrapperRenderHook({
        customHook: useSong,
        renderOptions: {
          currentState: mockStructureSongsData,
          dispatch: mockDispatch,
        },
      });

      result.current.deleteSong(idSong);

      expect(mockDispatch).toHaveBeenCalledWith(
        expectedDeleteSongActionCreator
      );
    });
  });
});
