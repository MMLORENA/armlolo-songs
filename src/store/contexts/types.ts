export interface SongsContextStructure {
  songs: Song[];
  songActive: Song;
}

export interface Song {
  title: string;
  artist: string;
  picture: string;
}
