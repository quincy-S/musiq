function useFormatTime(ms) {
  function formatTime(ms) {
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    let minutes = Math.floor(ms / 60000);
    let time = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    return [time];
  }
}

export default useFormatTime;
