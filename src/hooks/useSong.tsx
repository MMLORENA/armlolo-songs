import * as musicMetaData from "music-metadata-browser";
import { Buffer } from "buffer";
import process from "process";
import { useContext } from "react";
import SongsContext from "../store/contexts/SongsContext/SongsContext";
import { addSongActionCreator } from "../store/actions/actionsSongs/actionsCreatorSongs";

window.Buffer = Buffer;
window.process = process;

const useSong = () => {
  const { dispatch } = useContext(SongsContext);

  const addSong = async (songFile: File) => {
    const reader = new FileReader();
    await reader.readAsDataURL(songFile);

    const {
      common: { title, album, artist, picture },
      format: { duration },
    } = await musicMetaData.parseBlob(songFile);

    reader.onloadend = () => {
      const previewAudio = reader.result as string;
      dispatch(
        addSongActionCreator({
          id: `${Date.now()}`,
          title: title!,
          album: album!,
          artist: artist!,
          time: `${duration!}`,
          audio: previewAudio,
          picture: URL.createObjectURL(
            new Blob([picture![0].data], { type: "image/png" } /* (1) */)
          ),
        })
      );
    };
  };

  return { addSong };
};

export default useSong;
