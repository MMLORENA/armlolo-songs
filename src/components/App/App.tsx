import GlobalStyle from "../../GlobalStyle";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Header />
      </AppStyled>
    </>
  );
};

export default App;
