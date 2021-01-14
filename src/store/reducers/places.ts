import {
  SET_ALL_PLACES,
  SET_SELECTED_PLACE,
  SET_PLACE_PREVIEW_VISIBILITY,
  SET_PLACE_FORM_VISIBILITY,
  SET_PRE_PLACE_LOCATION,
  ADD_NEW_PLACE,
} from "../actions";
import { PlaceState } from "../models";
import { data } from "../../data";
import { LatLngExpression } from "leaflet";

const initialState: PlaceState = {
  places: data,
  selectedPlace: null,
  placePreviewsIsVisible: false,
  placeFormIsVisible: false,
  prePlacePosition: (null as unknown) as LatLngExpression,
};

const productsReducer = (
  state: PlaceState = initialState,
  action: { type: string; payload: any }
): PlaceState => {
  switch (action.type) {
    case SET_ALL_PLACES: {
      return { ...state, places: action.payload };
    }
    case SET_SELECTED_PLACE: {
      return { ...state, selectedPlace: action.payload };
    }
    case SET_PLACE_PREVIEW_VISIBILITY: {
      return { ...state, placePreviewsIsVisible: action.payload };
    }
    case SET_PLACE_FORM_VISIBILITY: {
      return { ...state, placeFormIsVisible: action.payload };
    }
    case SET_PRE_PLACE_LOCATION: {
      return { ...state, prePlacePosition: action.payload };
    }
    case ADD_NEW_PLACE: {
      return { ...state, places: [...state.places, action.payload] };
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
