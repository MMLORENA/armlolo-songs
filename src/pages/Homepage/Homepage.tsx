import { useContext } from "react";
import AddSong from "../../components/AddSong/AddSong";
import SongPlayer from "../../components/SongPlayer/SongPlayer";
import SongsList from "../../components/SongsList/SongsList";
import SongsContext from "../../store/contexts/SongsContext/SongsContext";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): JSX.Element => {
  const { songActive } = useContext(SongsContext);

  return (
    <HomepageStyled className="homepage-container">
      <h2 className="homepage-title">Homepage</h2>
      <AddSong />
      {songActive.title ? <SongPlayer song={songActive} /> : <></>}
      <SongsList />
    </HomepageStyled>
  );
};

export default Homepage;
