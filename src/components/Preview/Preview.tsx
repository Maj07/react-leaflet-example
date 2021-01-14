import { connect } from "react-redux";
import { setPlacePreviewVisibility } from "../../store/actions";
import { IState } from "../../store/models";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Preview.css";

const Preview = ({ isVisible, place, closePreview }: any) => {
  return (
    <div
      className={`preview__container preview__container--${
        isVisible && place && "active"
      }`}
    >
      <div className="preview__close" onClick={() => closePreview()}>
        <AiFillCloseCircle></AiFillCloseCircle>
      </div>
      <div
        className="preview__picture"
        style={{ backgroundImage: `url(${place?.picture})` }}
      ></div>
      <div className="preview__description__container">
        <div className="preview__title">{place?.title}</div>
        <div className="preview__description">{place?.description}</div>
        <div style={{display: 'flex'}}>
          <a className="preview__button" href={place?.seeMoreLink} target="_blank" rel="noreferrer">See more</a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
  return { isVisible: places.placePreviewsIsVisible, place: places.selectedPlace };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closePreview: () =>
      dispatch(setPlacePreviewVisibility(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
