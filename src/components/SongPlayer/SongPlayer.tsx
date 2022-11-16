import { SongToPlay } from "../../store/contexts/types";
import SongPlayerStyled from "./SongPlayerStyled";

const SongPlayer = ({
  title,
  artist,
  picture,
  album,
  audio,
}: SongToPlay): JSX.Element => {
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
        ></audio>
      </div>
    </SongPlayerStyled>
  );
};

export default SongPlayer;
