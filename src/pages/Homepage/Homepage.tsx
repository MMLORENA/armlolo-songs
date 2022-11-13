import AddSong from "../../components/AddSong/AddSong";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): JSX.Element => {
  return (
    <HomepageStyled className="homepage">
      <h2 className="homepage__title">Homepage</h2>
      <AddSong />
    </HomepageStyled>
  );
};

export default Homepage;
