# DATA LAYER:

### DATA:

- An Array of the list of songs.
- Object song with title, artist and metadata.
- The songActive.

### Modifications:

- Add a Song at the array of songs.
- Remove a Song fromt the array of songs.
- Set the Playing Song.

# COMPONENTS:

## App:

### Show data:

- The **Header Component** with App title.
- A **Player Component** with the player actions for the playing song with the info of the picture, title, artist and more info of metaData.
- A **SongList Component** with a songCard for each song received from the Array.
- An input to add a new Song.

### Get Actions:

- Add a new song to the Songs Array.

## Header:

### Show Data:

- **Title App**: "Music Addicts" inside a level 1 heading.

## SongList:

### Show data

- Given a **SongCard Component** show a song for each song in the array of songs.

## SongCard:

### Show data

Of the received song:

- Its title in a level 2 heading.
- Its image and alternative text.
- Its artist.
- Its metaData.
- A button with the icon og playing to play the song.
- An info message when is playing or when the song is paused.
- An icon to remove the song from the array of songs.

## Get Actions:

## Player:

### Show data

Of the received song playing:

- Its title in a level 3 heading.
- Its image and alternative text.
- Its artist.
- Its metaData.
- Player buttons.

### Get Actions

- When the user clicks on player buttons: Play, stop or go next or previous song.

## Feedback Modal:

### Show Data:

- A message created succesfully a new song or error creating new song.
- An icon to close the feedback Modal.

### Get Action:

- close the icon when the user clicks on it.

## Button:

### Show data:

A Button or Icon received type of button.

### Get actions

Call the received action on click
