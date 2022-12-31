import React from "react";
import StyledRadio, { StyledHeading } from "./StyledRadio";
import { useDataLayerValue } from "../../DataLayer";
import Playlist from "../../components/Playlist/Playlist";

const Radio = ({ spotify }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <StyledRadio>
      <StyledHeading>Playlists</StyledHeading>
      {playlists?.items.map((playlist) => (
        <Playlist key={playlist.id} playlist={playlist} spotify={spotify} />
      ))}
    </StyledRadio>
  );
};

export default Radio;
