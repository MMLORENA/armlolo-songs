import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mockListSong, mockSong } from "../mocks/mockSongsData/mockSongsData";
import SongsContext from "../store/contexts/SongsContext/SongsContext";
import { SongsStructure } from "../store/contexts/types";
import songsReducer from "../store/reducers/songsReducer/songsReducer";
import mainTheme from "../styles/mainTheme";
import mockDispatch from "./mockDispatch";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const MockWrapper = ({ children }: WrapperProps): JSX.Element => {
  const mockInitialSongsState: SongsStructure = {
    songActive: mockSong,
    songs: mockListSong,
  };

  const [songsState] = useReducer(songsReducer, mockInitialSongsState);

  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <SongsContext.Provider
          value={{ ...songsState, dispatch: mockDispatch }}
        >
          {children}
        </SongsContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default MockWrapper;
