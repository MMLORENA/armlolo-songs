import { Song } from "../../../contexts/types";
import { ActionTypesSong } from "./actionsTypesSong";

export interface songAction {
  type: ActionTypesSong;
  payload?: unknown;
}

export interface loadSongsAction extends songAction {
  payload: Song[];
}
