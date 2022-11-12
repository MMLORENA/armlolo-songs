import { mockStructureSongsData } from "../../../mocks/mockStructureSongsData/mockStrutureSongsData";
import { loadSongsActionCreator } from "../../actions/actionsSongs/actionsCreatorSongs";
import { SongAction } from "../../actions/actionsSongs/types/actionsSongs";
import { SongsContextStructure } from "../../contexts/types";
import songsReducer from "./songsReducer";

describe("Given the songsReducers function", () => {
  describe("When it's called with a previous state and an action with type 'loadSongs' and a list of songs in payload", () => {
    test("Then should return a new state with a new list of songs", () => {
      const loadSongsAction = loadSongsActionCreator([]);
      const expectedNewState: SongsContextStructure = {
        ...mockStructureSongsData,
        songs: [],
      };

      const newState = songsReducer(mockStructureSongsData, loadSongsAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it's called with a previous state and an action with unknown type", () => {
    test("Then should return a new state same the previous state", () => {
      const unknownAction: SongAction = { type: "unknown" };
      const expectedNewState = { ...mockStructureSongsData };

      const newState = songsReducer(mockStructureSongsData, unknownAction);

      expect(newState).toStrictEqual(expectedNewState);
    });
  });
});
