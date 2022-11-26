import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SongsContext from "../../store/contexts/SongsContext/SongsContext";
import SongsContextProvider from "../../store/contexts/SongsContext/SongsContextProvider";
import mainTheme from "../../styles/mainTheme";
import { WrapperProps } from "./types/types";

const Wrapper = ({
  children,
  renderOptions: { currentState, dispatch },
}: WrapperProps): JSX.Element => {
  const MockStateProvider = ({ children }: PropsWithChildren): JSX.Element => {
    return dispatch ? (
      <SongsContext.Provider value={{ ...currentState!, dispatch }}>
        {children}
      </SongsContext.Provider>
    ) : (
      <SongsContextProvider initialSongState={currentState}>
        {children as JSX.Element}
      </SongsContextProvider>
    );
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <MockStateProvider>{children}</MockStateProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Wrapper;
