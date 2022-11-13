import { SongAction } from "../actions/actionsSongs/types/actionsSongs";

export interface SongsStructure {
  songs: Song[];
  songActive: Song;
}
export interface SongsContextStructure extends SongsStructure {
  dispatch: React.Dispatch<SongAction>;
}

export interface Song {
  title: string;
  album: string;
  artist: string;
  picture: string;
  id: string;
  time: string;
  audio: string;
}
