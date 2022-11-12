import { SongsContextStructure } from "../../store/contexts/types";
import { mockSong } from "../mockSongsData/mockSongsData";

export const mockStructureSongsData: SongsContextStructure = {
  songActive: mockSong,
  songs: [mockSong],
};
