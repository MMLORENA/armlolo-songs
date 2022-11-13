import React, { useState } from "react";
import AddSongStyled from "./AddSongStyled";

const AddSong = (): JSX.Element => {
  const noAudioSelected = "";
  const [audioName, setAudioName] = useState(noAudioSelected);

  const changeAudioName = (event: React.ChangeEvent<HTMLInputElement>) => {
    let fileName = event.target.files![0].name;
    setAudioName(fileName);
  };
  return (
    <AddSongStyled className="add-audio">
      <label className="add-audio__input-label">
        Click here to provide a song
        <input
          className="add-audio__input"
          onChange={(event) => changeAudioName(event)}
          type="file"
          accept=".mp3"
        />
      </label>
      <span className="add-audio__selected-file">{audioName}</span>
      <input className="add-audio__submit" type="submit" value="Send song" />
    </AddSongStyled>
  );
};

export default AddSong;
