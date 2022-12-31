import React, { useEffect, useState } from "react";
import StyledPlaylist, { StyledCarousel } from "./StyledPlaylist";
import Track from "../Track/Track";

const Playlist = ({ playlist, spotify }) => {
  const [tracks, setTracks] = useState();

  useEffect(() => {
    spotify.getGeneric(playlist.tracks.href).then((res) => {
      setTracks(res);
    });
  }, []);

  return (
    <StyledPlaylist>
      <h1>{playlist.name}</h1>
      <StyledCarousel>
        {tracks?.items.map((el) => (
          <Track el={el} key={el.track.id} />
        ))}
      </StyledCarousel>
    </StyledPlaylist>
  );
};

export default Playlist;
