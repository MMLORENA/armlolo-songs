import { mockListSongs } from "../../../mocks/mockSongsData/mockSongsData";
import { loadSongsActionCreator } from "./actionsCreatorSongs";

describe("Given the loadSongsActionCreator function", () => {
  describe("When its called with a list of songs", () => {
    test("Then should return an action with type 'loadSongs' and payload with list of songs received", () => {
      const expectedTypeAction = "loadSongs";

      const loadSongsAction = loadSongsActionCreator(mockListSongs);

      expect(loadSongsAction).toHaveProperty("type", expectedTypeAction);
      expect(loadSongsAction).toHaveProperty("payload", mockListSongs);
    });
  });
});
