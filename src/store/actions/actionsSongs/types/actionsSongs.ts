import { Song } from "../../../contexts/types";
import { ActionTypesSong } from "./actionsTypesSong";

export interface SongAction {
  type: ActionTypesSong;
  payload?: unknown;
}

export interface LoadSongsAction extends SongAction {
  payload: Song[];
}
