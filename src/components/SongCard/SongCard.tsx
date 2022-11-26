import { useContext } from "react";
import { addActiveSongActionCreator } from "../../store/actions/actionsSongs/actionsCreatorSongs";
import SongsContext from "../../store/contexts/SongsContext/SongsContext";
import { Song } from "../../store/contexts/types";
import Heading from "../Heading/Heading";
import SongCardStyled from "./SongCardStyled";

interface SongCardProps {
  song: Song;
  songPosition: number;
}

const SongCard = ({
  song: { title, artist, picture, time, album, audio },
  songPosition,
}: SongCardProps): JSX.Element => {
  const { dispatch } = useContext(SongsContext);

  return (
    <>
      <SongCardStyled
        onClick={() => {
          dispatch(
            addActiveSongActionCreator({
              id: `${Date.now()}`,
              title: title!,
              album: album!,
              artist: artist!,
              time: time,
              audio: audio,
              picture: picture,
            })
          );
        }}
      >
        <span className="song__position">{songPosition}</span>
        <img src={picture} alt={`Album ${album}`} height={70} width={70} />
        <section className="song-data-container">
          <Heading children={title} className="song__title" level={3} />
          <span className="song__artist">{artist}</span>
          <span className="song__album">{album}</span>
          <span className="song__duration">{time}</span>
        </section>
      </SongCardStyled>
    </>
  );
};

export default SongCard;
