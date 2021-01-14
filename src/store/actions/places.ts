import { LatLngExpression } from "leaflet";
import { Place } from "../models";

export const SET_ALL_PLACES = "SET_ALL_PLACES";
export const SET_SELECTED_PLACE = "SET_SELECTED_PLACE";
export const SET_PLACE_PREVIEW_VISIBILITY = "SET_PLACE_PREVIEW_VISIBILITY";
export const SET_PLACE_FORM_VISIBILITY = "SET_PLACE_FORM_VISIBILITY";
export const SET_PRE_PLACE_LOCATION = "SET_PRE_PLACE_LOCATION";
export const ADD_NEW_PLACE = "ADD_NEW_PLACE";

export const setAllPlaces = (places: Place[]) => ({
  type: SET_ALL_PLACES,
  payload: places,
});

export const setSelectedPlace = (place: Place) => ({
  type: SET_SELECTED_PLACE,
  payload: place,
});

export const setPlacePreviewVisibility = (show: boolean) => ({
  type: SET_PLACE_PREVIEW_VISIBILITY,
  payload: show,
});

export const setPlaceFormVisibility = (show: boolean) => ({
  type: SET_PLACE_FORM_VISIBILITY,
  payload: show,
});

export const setPrePlaceLocation = (payload: LatLngExpression) => ({
  type: SET_PRE_PLACE_LOCATION,
  payload,
});

export const addNewPlace = (payload: Place) => ({
  type: ADD_NEW_PLACE,
  payload,
});
