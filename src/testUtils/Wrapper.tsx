import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SongsContextProvider from "../store/contexts/SongsContext/SongsContextProvider";
import mainTheme from "../styles/mainTheme";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <SongsContextProvider>{children}</SongsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Wrapper;
