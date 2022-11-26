import mockDispatch from "../testUtils/mocks/mockDispatch/mockDispatch";
import { mockSong } from "../testUtils/mocks/mockSongsData/mockSongsData";
import WrapperRenderHook from "../testUtils/wrappers/WrapperRenderHook";
import useSong from "./useSong";

jest.mock("music-metadata-browser", () => ({
  ...jest.requireActual("music-metadata-browser"),
  parseBlob: () => ({
    common: { title: "", album: "", artist: "", picture: [{ data: "" }] },
    format: { duration: "" },
  }),
}));

describe("Given the useSong custom hook function", () => {
  describe("When addSong it's called with a music file", () => {
    test("Then dispatch has to been called with the music info", async () => {
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
    });

    describe("When addActiveSong it's called with a song", () => {
      test("Then dispatch has to been called with the music info", async () => {
        jest.useFakeTimers();

        const expectedPayload = {
          type: "addActiveSong",
          payload: mockSong,
        };

        const { result } = WrapperRenderHook({
          customHook: useSong,
          renderOptions: { dispatch: mockDispatch },
        });

        await result.current.addActiveSong(mockSong);

        expect(mockDispatch).toHaveBeenCalledWith(expectedPayload);
      });
    });
  });
});
