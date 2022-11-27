import secondsToSongTime from "./secondsToSongTime";

describe("Given the secondsToSongTime function", () => {
  describe("When it's called with '275'", () => {
    test("Then it should return '4:35'", () => {
      const expectedSongTime = "4:35";

      const songTime = secondsToSongTime(275);

      expect(songTime).toBe(expectedSongTime);
    });

    describe("When it's called with '245'", () => {
      test("Then it should return '4:05'", () => {
        const expectedSongTime = "4:05";

        const songTime = secondsToSongTime(245);

        expect(songTime).toBe(expectedSongTime);
      });
    });
  });
});
