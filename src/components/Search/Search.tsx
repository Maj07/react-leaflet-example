import { connect } from "react-redux";
import { setSelectedPlace, setPlacePreviewVisibility, setSearchVisibility } from "../../store/actions";
import { IState, Place } from "../../store/models";
import {BiArrowBack} from "react-icons/bi"
import "./Search.css";

const Search = ({ searchIsVisible, places, closeSearch, setSelectedPlace }: any) => {

  return (
    <div
      className={`search__container search__container--${
        searchIsVisible && "active"
      }`}
    >
      <div className="search__header">
        <span className="search__header__close" role="button" onClick={() => closeSearch()}><BiArrowBack/></span>
        <span className="search__header__title">Search</span>
      </div>
      <div className="search__list">
        {places.map((place: Place) => (
        <div key={place.title} className="search__list__item" style={{backgroundImage: `url(${place.picture})`}} onClick={() => setSelectedPlace(place) }>
        </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { search, places } = state;
  return {searchIsVisible: search.searchIsVisible, places: places.places};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeSearch: () =>
      dispatch(setSearchVisibility(false)),

    setSelectedPlace: (payload: Place) =>
      {
        dispatch(setSelectedPlace(payload));
        dispatch(setPlacePreviewVisibility(true))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
