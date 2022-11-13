import AddSongStyled from "./AddSongStyled";

const AddSong = (): JSX.Element => {
  return (
    <AddSongStyled className="add-audio">
      <label className="add-audio__input-label">
        Click here to provide a song
        <input className="add-audio__input" type="file" accept=".mp3" />
      </label>
      <input className="add-audio__submit" type="submit" value="Send song" />
    </AddSongStyled>
  );
};

export default AddSong;
