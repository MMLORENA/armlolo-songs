import { SongAction } from "../actions/actionsSongs/types/actionsSongs";

export interface SongsStructure {
  songs: Song[];
  songActive: Song;
}
export interface SongsContextStructure extends SongsStructure {
  dispatch: React.Dispatch<SongAction>;
}

export interface SongToPlay {
  title: string;
  album: string;
  artist: string;
  picture: string;
  audio: string;
}
export interface Song extends SongToPlay {
  id: string;
  time: string;
}
