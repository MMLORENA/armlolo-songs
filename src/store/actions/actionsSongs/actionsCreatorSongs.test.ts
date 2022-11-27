import {
  mockListSong,
  mockSong,
} from "../../../testUtils/mocks/mockSongsData/mockSongsData";
import {
  addActiveSongActionCreator,
  addSongActionCreator,
  deleteSongActionCreator,
  loadSongsActionCreator,
  removeActiveSongActionCreator,
} from "./actionsCreatorSongs";
import { RemoveActiveSongAction } from "./types/actionsSongs";
import { ActionTypesSong } from "./types/actionsTypesSong";

describe("Given the loadSongsActionCreator function", () => {
  describe("When its called with a list of songs", () => {
    test("Then it should return an action with type 'loadSongs' and payload with list of songs received", () => {
      const expectedTypeAction: ActionTypesSong = "loadSongs";

      const loadSongsAction = loadSongsActionCreator(mockListSong);

      expect(loadSongsAction).toHaveProperty("type", expectedTypeAction);
      expect(loadSongsAction).toHaveProperty("payload", mockListSong);
    });
  });
});

describe("Given the addSongActionCreator function", () => {
  describe("When its called with song 'Armthis&Lojelzy'", () => {
    test("Then it should return an action with type 'addSong' and payload with song 'Armthis&Lojelzy'", () => {
      const expectedTypeAction: ActionTypesSong = "addSong";

      const addSongAction = addSongActionCreator(mockSong);

      expect(addSongAction).toHaveProperty("type", expectedTypeAction);
      expect(addSongAction).toHaveProperty("payload", mockSong);
    });
  });
});

describe("Given the addActiveSongActionCreator function", () => {
  describe("When its called with song 'Armthis&Lojelzy'", () => {
    test("Then it should return an action with type 'addSong' and payload with song 'Armthis&Lojelzy'", () => {
      const expectedTypeAction: ActionTypesSong = "addActiveSong";

      const addSongAction = addActiveSongActionCreator(mockSong);

      expect(addSongAction).toHaveProperty("type", expectedTypeAction);
      expect(addSongAction).toHaveProperty("payload", mockSong);
    });
  });
});

describe("Given the deleteSongActionCreator function", () => {
  describe("When its called with id song 1", () => {
    test("Then it should return an action with type 'deleteSong' and payload with song id '1'", () => {
      const expectedTypeAction: ActionTypesSong = "deleteSong";
      const expectedIdSong: string = "1";

      const deleteSongAction = deleteSongActionCreator(expectedIdSong);

      expect(deleteSongAction).toHaveProperty("type", expectedTypeAction);
      expect(deleteSongAction).toHaveProperty("payload", expectedIdSong);
    });
  });
});

describe("Given the removeActiveSongActionCreator function", () => {
  describe("When it's called", () => {
    test("Then should return an action with type 'removeActiveSongAction'", () => {
      const expectedAction: RemoveActiveSongAction = {
        type: "removeActiveSong",
      };

      const action = removeActiveSongActionCreator();

      expect(action).toStrictEqual(expectedAction);
    });
  });
});
