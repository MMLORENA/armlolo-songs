import {
  LoadSongsAction,
  SongAction,
} from "../../actions/actionsSongs/types/actionsSongs";
import { SongsContextStructure } from "../../contexts/types";

const songsReducer = (
  previewSongsState: SongsContextStructure,
  action: SongAction
) => {
  let newSongsState: SongsContextStructure;

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
