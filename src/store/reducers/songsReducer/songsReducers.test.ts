import {
  mockListSong,
  mockSong,
} from "../../../testUtils/mocks/mockSongsData/mockSongsData";
import { mockStructureSongsData } from "../../../testUtils/mocks/mockStructureSongsData/mockStrutureSongsData";
import {
  addSongActionCreator,
  loadSongsActionCreator,
} from "../../actions/actionsSongs/actionsCreatorSongs";
import { SongAction } from "../../actions/actionsSongs/types/actionsSongs";
import { SongsStructure } from "../../contexts/types";
import songsReducer from "./songsReducer";

describe("Given the songsReducers function", () => {
  describe("When it's called with a previous state and an action with type 'loadSongs' and a list of songs in payload", () => {
    test("Then it should return a new state with a new list of songs", () => {
      const loadSongsAction = loadSongsActionCreator(mockListSong);
      const expectedNewState: SongsStructure = {
        songActive: mockSong,
        songs: mockListSong,
      };

      const newState = songsReducer(mockStructureSongsData, loadSongsAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it's called with a previous state and and action with type 'addSongs' and a song", () => {
    test("Then it should return a new state same previous state with the new song received", () => {
      const addSongAction = addSongActionCreator(mockSong);
      const expectedNewState: SongsStructure = {
        songActive: mockSong,
        songs: [...mockListSong, mockSong],
      };

      const newState = songsReducer(mockStructureSongsData, addSongAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it's called with a previous state and an action with unknown type", () => {
    test("Then it should return a new state same the previous state", () => {
      const unknownAction: SongAction = { type: "unknown" };
      const expectedNewState = { ...mockStructureSongsData };

      const newState = songsReducer(mockStructureSongsData, unknownAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
