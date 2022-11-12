import { Song } from "../../contexts/types";
import { LoadSongsAction } from "./types/actionsSongs";

export const loadSongsActionCreator = (songsList: Song[]): LoadSongsAction => ({
  type: "loadSongs",
  payload: songsList,
});
