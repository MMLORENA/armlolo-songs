import { screen } from "@testing-library/react";
import { mockSong } from "../../testUtils/mocks/mockSongsData/mockSongsData";
import { WrapperProps } from "../../testUtils/wrappers/types/types";
import WrapperRender from "../../testUtils/wrappers/WrapperRender";
import SongPlayer from "./SongPlayer";

describe("Given a Song player component", () => {
  const SongPlayerComponent = <SongPlayer song={mockSong} />;
  const componentWithOptions: WrapperProps = {
    children: SongPlayerComponent,
    renderOptions: {},
  };

  describe("When it is rendered with a song song title, album, artist, audio and a picture", () => {
    test("Then it should show the title of the song, the artist and the album", () => {
      WrapperRender(componentWithOptions);

      const songTitle = screen.queryByText(mockSong.title);
      const songAlbum = screen.queryByText(mockSong.album);
      const songArtist = screen.queryByText(mockSong.artist);

      expect(songTitle).toBeInTheDocument();
      expect(songArtist).toBeInTheDocument();
      expect(songAlbum).toBeInTheDocument();
    });

    test("Then it should show an audio player with the accesible name of song player", () => {
      WrapperRender(componentWithOptions);

      const audioPlayer = screen.queryByLabelText("Song Player");

      expect(audioPlayer).toBeInTheDocument();
    });

    test("Then it should show a picture with The name of the album as accesible name and the picture as src", () => {
      WrapperRender(componentWithOptions);

      const picture = screen.queryByRole("img", {
        name: `Album ${mockSong.album}`,
      });

      expect(picture).toBeInTheDocument();
      expect(picture).toHaveAttribute("src", mockSong.picture);
    });
  });
});
