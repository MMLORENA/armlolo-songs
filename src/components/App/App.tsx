import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../Header/Header";
import AppStyled from "./AppStyled";
import Homepage from "../../pages/Homepage/Homepage";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          icon={false}
        />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
