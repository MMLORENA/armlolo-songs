import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { Song } from "../../../store/contexts/types";

const numberOfSongs = 2;

const songFactory = Factory.define<Song>(() => ({
  artist: faker.internet.userName(),
  picture: faker.image.imageUrl(),
  title: faker.music.songName(),
  album: faker.company.name(),
  audio: faker.system.filePath(),
  id: faker.datatype.uuid(),
  time: `${faker.datatype.datetime()}`,
}));

export const mockSong = songFactory.build();
export const mockListSong = songFactory.buildList(numberOfSongs);
