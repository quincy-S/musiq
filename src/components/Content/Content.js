import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import StyledContent from "./StyledContent";

import Radio from "../../pages/Radio/Radio";
import MusicVideos from "../../pages/MusicVideos/MusicVideos";
import Profile from "../../pages/Profile/Profile";

import Home from "../../pages/Home/Home";
import Collections from "../../pages/Collections/Collections";
import AlbumDetails from "../../pages/AlbumDetails/AlbumDetails";
import SharedLayout from "../../pages/SharedLayout/SharedLayout";

const Content = ({ spotify }) => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     function retrieve(data) {
  //       let nex = new Set();

  //       for (let i = 0; i < data.length; i++) {
  //         nex.add(data[i].track.album.id);
  //         if (nex.size === 20) {
  //           return [...nex];
  //         }
  //       }
  //       return [...nex];
  //     }

  //     let authParams = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body:
  //         "grant_type=client_credentials&client_id=" +
  //         Credentials.client_id +
  //         "&client_secret=" +
  //         Credentials.client_secret,
  //     };

  //     const response = await fetch(
  //       "https://accounts.spotify.com/api/token",
  //       authParams
  //     );

  //     const json = await response.json();

  //     setSecret(json.access_token);

  //     const topSongsReq = await fetch(
  //       "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + json.access_token,
  //         },
  //       }
  //     );

  //     const topSongsResponse = await topSongsReq.json();
  //     setTopSongs(topSongsResponse.tracks.items);
  //     let albumIDs = retrieve(topSongsResponse.tracks.items);

  //     const albumsReq = await fetch(
  //       "https://api.spotify.com/v1/albums?ids=" + albumIDs,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + json.access_token,
  //         },
  //       }
  //     );
  //     const albumsResponse = await albumsReq.json();
  //     setTopAlbums(albumsResponse.albums);
  //   };

  //   fetchData();
  // }, []);

  return (
    <StyledContent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout spotify={spotify} />}>
            <Route index element={<Home />} />
            <Route path="collections" element={<Collections />} />
            <Route path="radio" element={<Radio spotify={spotify} />} />
            <Route path="musicvideos" element={<MusicVideos />} />
            <Route path="profile" element={<Profile spotify={spotify} />} />
            <Route path="album/:id" element={<AlbumDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StyledContent>
  );
};

export default Content;
