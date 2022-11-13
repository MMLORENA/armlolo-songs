import { useContext } from "react";
import SongsContext from "../../store/contexts/SongsContext/SongsContext";
import { Song } from "../../store/contexts/types";
import SongCard from "../SongCard/SongCard";
import SongsListStyled from "./SongsListStyled";

const SongsList = (): JSX.Element => {
  const { songs } = useContext(SongsContext);

  return (
    <>
      <SongsListStyled>
        {songs && (
          <ul className="songs-container">
            {songs.map((song: Song, position) => (
              <SongCard songPosition={position + 1} song={song} key={song.id} />
            ))}
          </ul>
        )}
        {songs.length === 0 && (
          <span className="none-songs">No songs available </span>
        )}
      </SongsListStyled>
    </>
  );
};

export default SongsList;
