import { useContext } from "react";
import AddSong from "../../components/AddSong/AddSong";
import SongPlayer from "../../components/SongPlayer/SongPlayer";
import SongsList from "../../components/SongsList/SongsList";
import SongsContext from "../../store/contexts/SongsContext/SongsContext";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): JSX.Element => {
  const {
    songActive: { title, album, audio, picture, artist },
  } = useContext(SongsContext);

  return (
    <HomepageStyled className="homepage-container">
      <h2 className="homepage-title">Homepage</h2>
      <AddSong />
      <SongsList />
      <SongPlayer
        title={title ? title : "Unknown"}
        album={album ? album : "Unknown"}
        artist={artist ? artist : "Unknown"}
        audio={audio ? audio : ""}
        picture={picture ? picture : "unknown.png"}
      />
    </HomepageStyled>
  );
};

export default Homepage;
