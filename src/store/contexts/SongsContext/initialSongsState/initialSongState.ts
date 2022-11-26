import { Song, SongsStructure } from "../../types";

const initialSongsContextState: SongsStructure = {
  songActive: {} as Song,
  songs: [] as Song[],
};

export default initialSongsContextState;
