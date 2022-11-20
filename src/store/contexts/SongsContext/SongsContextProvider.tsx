import { useReducer } from "react";
import songsReducer from "../../reducers/songsReducer/songsReducer";
import { SongsStructure } from "../types";
import initialSongsContextState from "./initialSongsState/initialSongState";
import SongsContext from "./SongsContext";

interface SongsContextProviderProps {
  children: JSX.Element | JSX.Element[];
  initialSongState: SongsStructure;
}

const SongsContextProvider = ({
  children,
  initialSongState = initialSongsContextState,
}: SongsContextProviderProps): JSX.Element => {
  const [songsState, dispatch] = useReducer(songsReducer, initialSongState);

  return (
    <SongsContext.Provider value={{ ...songsState, dispatch }}>
      {children}
    </SongsContext.Provider>
  );
};

export default SongsContextProvider;
