import { Song, SongsContextStructure } from "../types";
import SongsContext from "./SongsContext";

interface SongsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const SongsContextProvider = ({
  children,
}: SongsContextProviderProps): JSX.Element => {
  const initialSongsState: SongsContextStructure = {
    songActive: {} as Song,
    songs: [] as Song[],
  };
  return (
    <SongsContext.Provider value={initialSongsState}>
      {children}
    </SongsContext.Provider>
  );
};

export default SongsContextProvider;
