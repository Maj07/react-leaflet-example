export const SET_SEARCH_VISIBILITY = "SET_SEARCH_VISIBILITY";

export const setSearchVisibility = (show: boolean) => ({
  type: SET_SEARCH_VISIBILITY,
  payload: show,
});
