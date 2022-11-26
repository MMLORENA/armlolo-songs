import { useContext } from "react";
import AddSong from "../../components/AddSong/AddSong";
import SongPlayer from "../../components/SongPlayer/SongPlayer";
import SongsList from "../../components/SongsList/SongsList";
import SongsContext from "../../store/contexts/SongsContext/SongsContext";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): JSX.Element => {
  const {
    songActive: { title, artist, album, audio, picture },
  } = useContext(SongsContext);
  return (
    <HomepageStyled className="homepage-container">
      <h2 className="homepage-title">Homepage</h2>
      <AddSong />
      {title ? (
        <SongPlayer
          title={title}
          artist={artist}
          album={album}
          audio={audio}
          picture={picture}
        />
      ) : (
        <></>
      )}
      <SongsList />
    </HomepageStyled>
  );
};

export default Homepage;
