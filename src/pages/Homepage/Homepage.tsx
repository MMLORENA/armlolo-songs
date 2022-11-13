import AddSong from "../../components/AddSong/AddSong";
import SongsList from "../../components/SongsList/SongsList";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): JSX.Element => {
  return (
    <HomepageStyled className="homepage-container">
      <h2 className="homepage-title">Homepage</h2>
      <AddSong />
      <SongsList />
    </HomepageStyled>
  );
};

export default Homepage;
