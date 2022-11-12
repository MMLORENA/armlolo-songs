import { mockSong } from "../../../mocks/mockSongsData/mockSongsData";
import { loadSongsActionCreator } from "./actionsCreatorSongs";
import { ActionTypesSong } from "./types/actionsTypesSong";

describe("Given the loadSongsActionCreator function", () => {
  describe("When its called with a list of songs", () => {
    test("Then should return an action with type 'loadSongs' and payload with list of songs received", () => {
      const expectedTypeAction: ActionTypesSong = "loadSongs";

      const loadSongsAction = loadSongsActionCreator([mockSong]);

      expect(loadSongsAction).toHaveProperty("type", expectedTypeAction);
      expect(loadSongsAction).toHaveProperty("payload", [mockSong]);
    });
  });
});
