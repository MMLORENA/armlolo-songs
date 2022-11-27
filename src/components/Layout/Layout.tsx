import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";
import paths from "../../utils/paths/paths";

const Layout = (): JSX.Element => {
  const { base, home } = paths;

  return (
    <>
      <LayoutStyled>
        <Header />
        <Routes>
          <Route path={base} element={<Navigate to={home} />} />
          <Route path={home} element={<Homepage />} />
        </Routes>
      </LayoutStyled>
    </>
  );
};

export default Layout;
