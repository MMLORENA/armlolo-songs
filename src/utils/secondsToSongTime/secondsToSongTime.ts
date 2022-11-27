const secondsToSongTime = (time: number) => {
  const minutes = `${~~((time % 3600) / 60)}`;
  let seconds = `${~~time % 60}`;

  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
};

export default secondsToSongTime;
