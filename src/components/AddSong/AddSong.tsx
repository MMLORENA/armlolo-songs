import React, { useState } from "react";
import useSong from "../../hooks/useSong";
import Button from "../Button/Button";
import AddSongStyled from "./AddSongStyled";

const AddSong = (): JSX.Element => {
  const noAudioSelected = { songName: "", songFile: new File([], "") };
  const [audioInfo, setAudioInfo] = useState(noAudioSelected);

  const { addSong } = useSong();

  const changeAudioName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const songFile = event.target.files![0];
    setAudioInfo({ songName: songFile.name, songFile: songFile });
  };

  const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSong(audioInfo.songFile);
  };

  return (
    <AddSongStyled className="add-audio" onSubmit={handleOnsubmit}>
      <label className="add-audio__input-label">
        Click here to provide a song
        <input
          className="add-audio__input"
          onChange={changeAudioName}
          type="file"
          accept=".mp3"
        />
      </label>
      <span className="add-audio__selected-file">{audioInfo.songName}</span>
      <Button text={"Send Song"} type="submit" />
    </AddSongStyled>
  );
};

export default AddSong;
