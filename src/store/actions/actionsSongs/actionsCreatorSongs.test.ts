import {
  mockListSong,
  mockSong,
} from "../../../testUtils/mocks/mockSongsData/mockSongsData";
import {
  addActiveSongActionCreator,
  addSongActionCreator,
  loadSongsActionCreator,
} from "./actionsCreatorSongs";
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
