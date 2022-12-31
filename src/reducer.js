export const initialState = {
  user: null,
  playing: false,
  item: null,
  token: null,
  showMenu: false,
  topAlbums: [],
  topSongs: [],
  discoverWeekly: [],
  playing: false,
  playlists: [],
  showPopup: false,
};

function reducer(state, action) {
  // console.log(action);

  switch (action.type) {
    case "SET_POPUP":
      return {
        ...state,
        showPopup: action.showPopup,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "TOGGLE_MENU":
      return {
        ...state,
        showMenu: action.showMenu,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discoverWeekly: action.discover_weekly,
      };
    case "SET_TOP_SONGS":
      return {
        ...state,
        topSongs: action.topSongs,
      };
    case "SET_TOP_ALBUMS":
      return {
        ...state,
        topAlbums: action.topAlbums,
      };
    default:
      return state;
  }
}

export default reducer;
