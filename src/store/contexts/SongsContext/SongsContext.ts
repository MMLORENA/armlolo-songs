import { createContext } from "react";
import { SongsContextStructure } from "../types";

const SongsContext = createContext({} as SongsContextStructure);

export default SongsContext;
