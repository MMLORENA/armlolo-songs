import { Song } from "../../contexts/types";
import { addSongAction, LoadSongsAction } from "./types/actionsSongs";

export const loadSongsActionCreator = (songsList: Song[]): LoadSongsAction => ({
  type: "loadSongs",
  payload: songsList,
});

export const addSongActionCreator = (song: Song): addSongAction => ({
  type: "addSong",
  payload: song,
});
