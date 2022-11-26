import {
  AddSongAction,
  LoadSongsAction,
  SongAction,
} from "../../actions/actionsSongs/types/actionsSongs";
import { SongsStructure } from "../../contexts/types";

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

    default:
      newSongsState = { ...previewSongsState };
  }

  return newSongsState;
};

export default songsReducer;
