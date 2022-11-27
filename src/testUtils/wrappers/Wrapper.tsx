import { PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import SongsContext from "../../store/contexts/SongsContext/SongsContext";
import SongsContextProvider from "../../store/contexts/SongsContext/SongsContextProvider";
import mainTheme from "../../styles/mainTheme";
import { WrapperProps } from "./types/types";

const Wrapper = ({
  children,
  renderOptions: { currentState, dispatch, initialEntries },
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

  const Router = ({ children }: PropsWithChildren): JSX.Element => {
    return initialEntries ? (
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    ) : (
      <BrowserRouter>{children}</BrowserRouter>
    );
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <MockStateProvider>{children}</MockStateProvider>
      </Router>
    </ThemeProvider>
  );
};

export default Wrapper;
