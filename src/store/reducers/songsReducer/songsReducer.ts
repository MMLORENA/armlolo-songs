import {
  AddSongAction,
  DeleteSongAction,
  LoadSongsAction,
  SongAction,
} from "../../actions/actionsSongs/types/actionsSongs";
import { Song, SongsStructure } from "../../contexts/types";

const songsReducer = (
  previewSongsState: SongsStructure,
  action: SongAction
): SongsStructure => {
  let newSongsState: SongsStructure;

  switch (action.type) {
    case "loadSongs":
      newSongsState = {
        ...previewSongsState,
        songs: (action as LoadSongsAction).payload,
      };
      break;

    case "addSong":
      newSongsState = {
        ...previewSongsState,
        songs: [...previewSongsState.songs, (action as AddSongAction).payload],
      };
      break;

    case "addActiveSong":
      newSongsState = {
        ...previewSongsState,
        songActive: (action as AddSongAction).payload,
      };
      break;

    case "deleteSong":
      newSongsState = {
        ...previewSongsState,
        songs: previewSongsState.songs.filter(
          ({ id }) => id !== (action as DeleteSongAction).payload
        ),
      };
      break;

    case "removeActiveSong":
      newSongsState = {
        ...previewSongsState,
        songActive: {} as Song,
      };
      break;

    default:
      newSongsState = { ...previewSongsState };
  }

  return newSongsState;
};

export default songsReducer;
