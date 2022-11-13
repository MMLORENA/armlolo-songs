import AddSong from "../../components/AddSong/AddSong";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): JSX.Element => {
  return (
    <HomepageStyled className="homepage-container">
      <h2 className="homepage-title">Homepage</h2>
      <AddSong />
    </HomepageStyled>
  );
};

export default Homepage;
