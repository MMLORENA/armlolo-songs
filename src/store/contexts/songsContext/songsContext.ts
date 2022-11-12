import { createContext } from "react";
import { SongsContextStructure } from "../types";

const songsContext = createContext({} as SongsContextStructure);

export default songsContext;
