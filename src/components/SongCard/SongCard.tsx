import { Song } from "../../store/contexts/types";
import SongCardStyled from "./SongCardStyled";

interface SongCardProps {
  song: Song;
  songPosition: number;
}

const SongCard = ({
  song: { title, artist, picture, time, album, audio },
  songPosition,
}: SongCardProps): JSX.Element => {
  return (
    <>
      <SongCardStyled>
        <span className="song__position">{songPosition}</span>
        <img src={picture} alt={`Album ${album}`} height={70} width={70} />
        <section className="song-data-container">
          <h3 className="song__title">{title}</h3>
          <span className="song__artist">{artist}</span>
          <span className="song__album">{album}</span>
          <span className="song__duration">{time}</span>
        </section>
      </SongCardStyled>
    </>
  );
};

export default SongCard;
