import { SET_SEARCH_VISIBILITY } from "../actions";
import { SearchState } from "../models";

const initialState: SearchState = {
  searchIsVisible: false,
};

const searchReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_SEARCH_VISIBILITY: {
      return { ...state, searchIsVisible: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
