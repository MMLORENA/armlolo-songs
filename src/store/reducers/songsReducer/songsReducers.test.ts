import {
  mockListSong,
  mockSong,
} from "../../../testUtils/mocks/mockSongsData/mockSongsData";
import { mockStructureSongsData } from "../../../testUtils/mocks/mockStructureSongsData/mockStrutureSongsData";
import {
  addActiveSongActionCreator,
  addSongActionCreator,
  deleteSongActionCreator,
  loadSongsActionCreator,
  removeActiveSongActionCreator,
} from "../../actions/actionsSongs/actionsCreatorSongs";
import { SongAction } from "../../actions/actionsSongs/types/actionsSongs";
import { SongsStructure, Song } from "../../contexts/types";
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

  describe("When it's called with a previous state and and action with type 'addActiveSongs' and a song", () => {
    test("Then it should return a new state same previous state with the new song received", () => {
      const addSongAction = addActiveSongActionCreator(mockSong);
      const expectedNewState: SongsStructure = {
        songActive: mockSong,
        songs: [...mockListSong],
      };

      const newState = songsReducer(
        { ...mockStructureSongsData, songActive: {} as Song },
        addSongAction
      );

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it's called with a previous state and an action with unknown type", () => {
    test("Then it should return a new state same the previous state", () => {
      const unknownAction: SongAction = { type: "unknown" };
      const expectedNewState: SongsStructure = { ...mockStructureSongsData };

      const newState = songsReducer(mockStructureSongsData, unknownAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it's called with a previous state and an action type 'deleteSong' and id '1'", () => {
    test("Then it should return a new state with the list of songs without song with id received", () => {
      const mockIdSong: string = mockStructureSongsData.songs[0].id;

      const deleteAction: SongAction = deleteSongActionCreator(mockIdSong);
      const expectedNewState: SongsStructure = {
        ...mockStructureSongsData,
        songs: [mockStructureSongsData.songs[1]],
      };

      const newState = songsReducer(mockStructureSongsData, deleteAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it's called with a previus state and an action type 'removeActiveSong'", () => {
    test("Then it should return the same previous state with empty active song", () => {
      const removeAction = removeActiveSongActionCreator();
      const expectedNewState: SongsStructure = {
        ...mockStructureSongsData,
        songActive: {} as Song,
      };

      const newState = songsReducer(mockStructureSongsData, removeAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
