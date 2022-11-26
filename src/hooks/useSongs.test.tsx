import { addActiveSongActionCreator } from "../store/actions/actionsSongs/actionsCreatorSongs";
import { Song } from "../store/contexts/types";
import mockDispatch from "../testUtils/mocks/mockDispatch/mockDispatch";
import { mockSong } from "../testUtils/mocks/mockSongsData/mockSongsData";
import { mockStructureSongsData } from "../testUtils/mocks/mockStructureSongsData/mockStrutureSongsData";
import WrapperRenderHook from "../testUtils/wrappers/WrapperRenderHook";
import useSong from "./useSong";
import { toast } from "react-toastify";

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

      const mockToastify = jest.fn();
      toast.success = mockToastify;

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
      expect(mockToastify).toHaveBeenCalled();
    });
  });

  describe("When addActiveSong it's called with a song", () => {
    test("Then dispatch has to been called with the music info", () => {
      jest.useFakeTimers();

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
    test("Then notify error should haven been called", async () => {
      const mockErrorToastify = jest.fn();
      toast.error = mockErrorToastify;

      jest.useFakeTimers();

      const { result } = WrapperRenderHook({
        customHook: useSong,
        renderOptions: { dispatch: mockDispatch },
      });

      await result.current.addSong(new File([], ""));

      expect(mockErrorToastify).toHaveBeenCalled();
    });
  });
});
