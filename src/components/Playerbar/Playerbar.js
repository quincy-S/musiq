import React, { useEffect, useRef } from "react";
import StyledPlayerbar, {
  StyledPart,
  StyledFirst,
  StyledSecond,
  StyledThird,
  StyledInput,
} from "./StyledPlayerbar";
import {
  Next,
  Play,
  Shuffle,
  Previous,
  Pause,
  Repeat,
  VolumeHigh,
} from "iconsax-react";
import { useDataLayerValue } from "../../DataLayer";

const Playerbar = ({ spotify }) => {
  const [{ item, token, playing }, dispatch] = useDataLayerValue();

  let musicPlayer = useRef(null);

  function loadScript() {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
  }

  function getPlayerInfo() {
    spotify.getGeneric("https://api.spotify.com/v1/me/player").then((res) => {
      // console.log("res", res);
    });
  }

  function initializePlayer() {
    console.log("initializing spotify player");
    let { Player } = window.Spotify;
    musicPlayer = new Player({
      name: "Musiq player",
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5,
    });

    // Ready
    musicPlayer.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
    });

    // Not Ready
    musicPlayer.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    // Error Handling
    musicPlayer.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });

    musicPlayer.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });

    musicPlayer.addListener("account_error", ({ message }) => {
      console.error(message);
    });

    musicPlayer.connect().then((success) => {
      if (success) {
        console.log(`The Web Playback SDK successfully connected to Spotify`);
      }
    });
  }

  function handlePlayPause() {
    if (playing) {
      spotify.pause().then(() => {
        dispatch({
          type: "SET_PLAYING",
          playing: false,
        });
      });
    } else {
      spotify.play().then(() => {
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    }
  }

  function skipNext() {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  }

  function skipPrevious() {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  }

  useEffect(() => {
    loadScript();
    window.onSpotifyWebPlaybackSDKReady = () => initializePlayer();
  }, []);

  useEffect(() => {
    spotify.getGeneric("https://api.spotify.com/v1/me/player").then((res) => {
      // const
    });
  });

  useEffect(() => {
    // spotify.getMyCurrentPlaybackState().then((r) => {
    //   console.log("r", r);

    //   dispatch({
    //     type: "SET_PLAYING",
    //     playing: r.is_playing,
    //   });

    //   dispatch({
    //     type: "SET_ITEM",
    //     item: r.item,
    //   });
    // });

    spotify.getMyDevices().then((res) => {
      // console.log("devices", res);
    });
  }, [spotify]);

  return (
    <StyledPlayerbar>
      <StyledFirst>
        <img src={item?.album.images[0].url} alt={item?.name} />
        {item ? (
          <span>
            <h2>{item.name}</h2>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </span>
        ) : (
          <span>
            <h2>No song is playing</h2>
            <p>...</p>
          </span>
        )}
      </StyledFirst>

      <StyledSecond>
        <StyledPart>
          <Shuffle />
          <Previous variant="Bold" onClick={skipNext} />
          {playing ? (
            <span onClick={handlePlayPause}>
              <Pause variant="Bold" />
            </span>
          ) : (
            <span onClick={handlePlayPause}>
              <Play variant="Bold" />
            </span>
          )}

          <Next variant="Bold" onClick={skipPrevious} />
          <Repeat />
        </StyledPart>
        <StyledPart>
          <input type="range" />
        </StyledPart>
      </StyledSecond>

      <StyledThird>
        <VolumeHigh />
        <StyledInput
          type="range"
          // className="ml-4 volume"
          // value={volume}
          // onChange={(e) => handleChange(e, "volume")}
        />
      </StyledThird>
    </StyledPlayerbar>
  );
};

export default Playerbar;
