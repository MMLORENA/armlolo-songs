import GlobalStyle from "../../styles/GlobalStyle";
import AddSong from "../AddSong/AddSong";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Header />
        <AddSong />
      </AppStyled>
    </>
  );
};

export default App;
