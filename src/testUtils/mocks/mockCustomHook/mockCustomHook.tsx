const mockCustomHookFunctions = {
  addSong: jest.fn(),
  addActiveSong: jest.fn(),
  nextSong: jest.fn(),
  deleteSong: jest.fn(),
};

jest.mock("../../../hooks/useSong", () => () => ({
  addSong: mockCustomHookFunctions.addSong,
  addActiveSong: mockCustomHookFunctions.addActiveSong,
  deleteSong: mockCustomHookFunctions.deleteSong,
  nextSong: mockCustomHookFunctions.nextSong,
}));

export default mockCustomHookFunctions;
