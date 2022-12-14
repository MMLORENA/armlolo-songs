import {
  addActiveSongActionCreator,
  deleteSongActionCreator,
  removeActiveSongActionCreator,
} from "../store/actions/actionsSongs/actionsCreatorSongs";
import mockDispatch from "../testUtils/mocks/mockDispatch/mockDispatch";
import { mockSong } from "../testUtils/mocks/mockSongsData/mockSongsData";
import { mockStructureSongsData } from "../testUtils/mocks/mockStructureSongsData/mockStrutureSongsData";
import WrapperRenderHook from "../testUtils/wrappers/WrapperRenderHook";
import useSong from "./useSong";
import mockToastify from "../testUtils/mocks/mockToastify/mockToastify";

interface metadataSong {
  common: {
    title: string;
    album: string;
    artist: string;
    picture: Array<{ data: string }> | string;
  };
  format: {
    duration: string;
  };
}

let mockMetaDataSong: metadataSong = {
  common: { title: "", album: "", artist: "", picture: [{ data: "" }] },
  format: { duration: "" },
};

jest.mock("music-metadata-browser", () => ({
  ...jest.requireActual("music-metadata-browser"),
  parseBlob: () => mockMetaDataSong,
}));

beforeEach(() => {
  jest.clearAllMocks();
});

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

  describe("When addSong it's called with a music file with out image", () => {
    test("Then dispatch has to been called with the music info and the pre defined david image", async () => {
      mockMetaDataSong = {
        ...mockMetaDataSong,
        common: { ...mockMetaDataSong.common, picture: "" },
      };

      jest.useFakeTimers();

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
          picture: "david.jpeg",
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
      test("Then dispatch must to be called with an action type addActiveSong and second song from list of songs", () => {
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
      test("Then dispatch must to be called with an action type removeActiveSong and empty song", () => {
        const actualIdSong = mockStructureSongsData.songs[1].id;
        const expectedAction = removeActiveSongActionCreator();

        const { result } = WrapperRenderHook({
          customHook: useSong,
          renderOptions: {
            currentState: mockStructureSongsData,
            dispatch: mockDispatch,
          },
        });

        result.current.nextSong(actualIdSong);

        expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
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

  describe("When deleteSong it's called with a id song different of active Song", () => {
    describe("And id is different than active song", () => {
      test("Then dispatch should have been called with an action 'deleteSonActionCreator' with the song id", async () => {
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

    describe("And id is same than active song", () => {
      test("Then dispatch must to be called two times with 'removeActiveSong' and 'deleteSonActionCreator' with the song id", () => {
        const idSong = mockStructureSongsData.songs[0].id;
        const expectedRemoveActiveSongAction = removeActiveSongActionCreator();
        const expectedDeleteSongAction = deleteSongActionCreator(idSong);

        const { result } = WrapperRenderHook({
          customHook: useSong,
          renderOptions: {
            currentState: {
              ...mockStructureSongsData,
              songActive: mockStructureSongsData.songs[0],
            },
            dispatch: mockDispatch,
          },
        });

        result.current.deleteSong(idSong);

        expect(mockDispatch).toHaveBeenCalledWith(
          expectedRemoveActiveSongAction
        );
        expect(mockDispatch).toHaveBeenCalledWith(expectedDeleteSongAction);
      });
    });
  });
});
