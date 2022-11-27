import * as musicMetaData from "music-metadata-browser";
import { toast } from "react-toastify";
import { Buffer } from "buffer";
import process from "process";
import { useContext } from "react";
import SongsContext from "../store/contexts/SongsContext/SongsContext";
import {
  addActiveSongActionCreator,
  addSongActionCreator,
  deleteSongActionCreator,
  removeActiveSongActionCreator,
} from "../store/actions/actionsSongs/actionsCreatorSongs";
import { Song } from "../store/contexts/types";

window.Buffer = Buffer;
window.process = process;

const useSong = () => {
  const { dispatch, songs, songActive } = useContext(SongsContext);

  const addSong = async (songFile: File) => {
    try {
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
            picture: picture
              ? URL.createObjectURL(
                  new Blob([picture[0].data], { type: "image/png" } /* (1) */)
                )
              : "david.jpeg",
          })
        );
      };

      const notify = () =>
        toast.success("🎶 Your Song has been added successfully");

      notify();
    } catch {
      const notify = () => toast.error("🔇 Oops!, something went wrong");

      notify();
    }
  };

  const addActiveSong = (song: Song) => {
    dispatch(addActiveSongActionCreator(song));
  };

  const nextSong = (id: string) => {
    const songPosition = songs.findIndex((song) => song.id === id);
    const newSongPosition = songPosition + 1;

    !songs[newSongPosition]
      ? dispatch(removeActiveSongActionCreator())
      : dispatch(addActiveSongActionCreator(songs[newSongPosition]));
  };

  const deleteSong = (id: string) => {
    if (songActive.id === id) {
      dispatch(removeActiveSongActionCreator());
    }

    dispatch(deleteSongActionCreator(id));
  };

  return { addSong, addActiveSong, nextSong, deleteSong };
};

export default useSong;
