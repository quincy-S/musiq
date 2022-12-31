import React from "react";
import StyledTrack, { StyledAlbumImg } from "./StyledTrack";

const Track = ({ el }) => {
  return (
    <StyledTrack
      onClick={() => {
        // console.log(el);
      }}
    >
      <StyledAlbumImg src={el.track.album.images[0].url} alt="album-img" />
      <h2>{el.track.artists[0].name}</h2>
      <p>{`${el.track.name.slice(0, 25)}...`}</p>
    </StyledTrack>
  );
};

export default Track;
