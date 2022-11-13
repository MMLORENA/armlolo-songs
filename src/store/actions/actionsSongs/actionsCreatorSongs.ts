import { Song } from "../../contexts/types";
import { AddSongAction, LoadSongsAction } from "./types/actionsSongs";

export const loadSongsActionCreator = (songsList: Song[]): LoadSongsAction => ({
  type: "loadSongs",
  payload: songsList,
});

export const addSongActionCreator = (song: Song): AddSongAction => ({
  type: "addSong",
  payload: song,
});
