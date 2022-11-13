import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
