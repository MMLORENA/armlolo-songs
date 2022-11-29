import useSong from "../../hooks/useSong";
import { Song } from "../../store/contexts/types";
import secondsToSongTime from "../../utils/secondsToSongTime/secondsToSongTime";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import SongCardStyled from "./SongCardStyled";

interface SongCardProps {
  song: Song;
  songPosition: number;
}

const SongCard = ({
  song: { title, artist, picture, time, album, audio, id },
  songPosition,
}: SongCardProps): JSX.Element => {
  const { addActiveSong, deleteSong } = useSong();

  const callActiveSong = () => {
    addActiveSong({
      id: id,
      title: title,
      album: album,
      artist: artist,
      time: time,
      audio: audio,
      picture: picture,
    });
  };

  const callDeleteSong = () => {
    deleteSong(id);
  };

  const songTime = secondsToSongTime(+time!);

  return (
    <SongCardStyled>
      <span className="song__position">{songPosition}</span>
      <img
        src={picture}
        alt={`Album ${album}`}
        height={70}
        width={70}
        onClick={callActiveSong}
      />
      <section className="song-data-container">
        <Heading children={title} className="song__title" level={3} />
        <span className="song__artist">{artist}</span>
        <span className="song__album">{album}</span>
        <span className="song__duration">{songTime}</span>
      </section>
      <Button disabled={false} type="button" onClick={callDeleteSong} />
    </SongCardStyled>
  );
};

export default SongCard;
