import { Song } from "../../contexts/types";
import { loadSongsAction } from "./types/actionsSongs";

export const loadSongsActionCreator = (songsList: Song[]): loadSongsAction => ({
  type: "loadSongs",
  payload: songsList,
});
