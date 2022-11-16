import { screen } from "@testing-library/react";
import { mockSong } from "../../mocks/mockSongsData/mockSongsData";
import { wrappedRender } from "../../testUtils/wrappedRender";
import SongPlayer from "./SongPlayer";

describe("Given a Song player component", () => {
  const { title, artist, album, audio, picture: image } = mockSong;
  const SongPlayerComponent = (
    <SongPlayer
      title={title}
      artist={artist}
      album={album}
      audio={audio}
      picture={image}
    />
  );

  describe("When it is rendered with a song song title, album, artist, audio and a picture", () => {
    test("Then it should show the title of the song, the artist and the album", () => {
      wrappedRender(SongPlayerComponent);

      const songTitle = screen.queryByText(title);
      const songAlbum = screen.queryByText(album);
      const songArtist = screen.queryByText(artist);

      expect(songTitle).toBeInTheDocument();
      expect(songArtist).toBeInTheDocument();
      expect(songAlbum).toBeInTheDocument();
    });

    test("Then it should show an audio player with the accesible name of song player", () => {
      wrappedRender(SongPlayerComponent);

      const audioPlayer = screen.queryByLabelText("Song Player");

      expect(audioPlayer).toBeInTheDocument();
    });

    test("Then it should show a picture with The name of the album as accesible name and the picture as src", () => {
      wrappedRender(SongPlayerComponent);

      const picture = screen.queryByRole("img", { name: `Album ${album}` });

      expect(picture).toBeInTheDocument();
      expect(picture).toHaveAttribute("src", image);
    });
  });
});
