import { Song } from "../../store/contexts/types";

const SongPlayer = ({
  title,
  artist,
  picture,
  time,
  album,
  audio,
}: Song): JSX.Element => {
  return (
    <article>
      <img src={picture} alt={`Album ${album}`} height={70} width={70} />
      <div className="song-data-container">
        <h3 className="song__title">{title}</h3>
        <span className="song__artist">{artist}</span>
        <span className="song__album">{album}</span>
        <span className="song__duration">{time}</span>
      </div>
      <audio src={audio} controls></audio>
    </article>
  );
};

export default SongPlayer;
