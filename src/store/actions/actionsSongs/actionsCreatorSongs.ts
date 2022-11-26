import { Song } from "../../contexts/types";
import {
  AddSongAction,
  DeleteSongAction,
  LoadSongsAction,
} from "./types/actionsSongs";

export const loadSongsActionCreator = (songsList: Song[]): LoadSongsAction => ({
  type: "loadSongs",
  payload: songsList,
});

export const addSongActionCreator = (song: Song): AddSongAction => ({
  type: "addSong",
  payload: song,
});

export const addActiveSongActionCreator = (song: Song): AddSongAction => ({
  type: "addActiveSong",
  payload: song,
});

export const deleteSongActionCreator = (id: string): DeleteSongAction => ({
  type: "deleteSong",
  payload: id,
});
