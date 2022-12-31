import React, { useEffect } from "react";
import Content from "./components/Content/Content";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./Credentials";
import { useDataLayerValue } from "./DataLayer";
import Login from "./components/Login/Login";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    function retrieve(data) {
      let nex = new Set();

      for (let i = 0; i < data.length; i++) {
        nex.add(data[i].track.album.id);
        if (nex.size === 20) {
          return [...nex];
        }
      }
      return [...nex];
    }

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcPtqvCFSGflq").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response.tracks.items,
        });
      });

      spotify.getPlaylist("37i9dQZEVXbMDoHDwVN2tF").then((response) => {
        dispatch({
          type: "SET_TOP_SONGS",
          topSongs: response.tracks.items,
        });
        let albumIDs = retrieve(response.tracks.items);
        spotify.getAlbums(albumIDs).then((response) => {
          dispatch({
            type: "SET_TOP_ALBUMS",
            topAlbums: response.albums,
          });
        });
      });
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme["primary"]}>
        <GlobalStyle />
        {token ? <Content spotify={spotify} /> : <Login />}
      </ThemeProvider>
    </>
  );
};

export default App;
