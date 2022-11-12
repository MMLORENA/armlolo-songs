import { useReducer } from "react";
import songsReducer from "../../reducers/songsReducer/songsReducer";
import { Song, SongsStructure } from "../types";
import SongsContext from "./SongsContext";

interface SongsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const SongsContextProvider = ({
  children,
}: SongsContextProviderProps): JSX.Element => {
  const initialSongsState: SongsStructure = {
    songActive: {} as Song,
    songs: [] as Song[],
  };

  const [songsState, dispatch] = useReducer(songsReducer, initialSongsState);

  return (
    <SongsContext.Provider value={{ ...songsState, dispatch }}>
      {children}
    </SongsContext.Provider>
  );
};

export default SongsContextProvider;
