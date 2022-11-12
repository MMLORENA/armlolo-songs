import {
  LoadSongsAction,
  SongAction,
} from "../../actions/actionsSongs/types/actionsSongs";
import { SongsStructure } from "../../contexts/types";

const songsReducer = (
  previewSongsState: SongsStructure,
  action: SongAction
) => {
  let newSongsState: SongsStructure;

  if (action.type === "loadSongs") {
    newSongsState = {
      ...previewSongsState,
      songs: (action as LoadSongsAction).payload,
    };
  } else {
    newSongsState = { ...previewSongsState };
  }

  return newSongsState;
};

export default songsReducer;
