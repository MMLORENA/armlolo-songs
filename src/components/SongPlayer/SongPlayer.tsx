import useSong from "../../hooks/useSong";
import { Song } from "../../store/contexts/types";
import SongPlayerStyled from "./SongPlayerStyled";

interface SongPlayerProps {
  song: Song;
}

const SongPlayer = ({
  song: { title, artist, picture, album, audio, id },
}: SongPlayerProps): JSX.Element => {
  const { nextSong } = useSong();
  return (
    <SongPlayerStyled>
      <img
        className="song-data__image"
        src={picture}
        alt={`Album ${album}`}
        height={100}
        width={100}
      />
      <div className="song-data__main">
        <div className="song-data__container">
          <span className="song-data__title">{title}</span>
          <span className="song-data__artist">{artist}</span>
          <span className="song-data__album">{album}</span>
        </div>
        <audio
          controls
          autoPlay
          aria-label="Song Player"
          src={audio}
          className="song-data__audio"
          onEnded={() => nextSong(id)}
        ></audio>
      </div>
    </SongPlayerStyled>
  );
};

export default SongPlayer;
