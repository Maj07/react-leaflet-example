import { connect } from "react-redux";
import { addNewPlace as addNewPlaceAction, setPlaceFormVisibility } from "../../store/actions";
import { IState, Place } from "../../store/models";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Form.css";
import { Field, Formik, Form as FormikForm } from "formik";
import { LatLng } from "leaflet";

const Form = ({
  isVisible,
  position,
  closeForm,
  addNewPlace
}: {
  isVisible: boolean;
  position: LatLng;
  closeForm: Function;
  addNewPlace: Function;
}) => {

  const initialValues = {
    picture: "",
    title: "",
    description: "",
    seeMoreLink: "",
  };

  const validator = (values: PlaceFormProps) => {
    const keys = Object.keys(values);

    return keys.reduce((prev, curr) => {
      if (!values[curr]) {
        return { ...prev, [curr]: "required" };
      }
      return prev;
    }, {});
  };

  const handleOnSubmit = (values: PlaceFormProps) => {
    addNewPlace({
      ...values,
      position: [position.lat, position.lng]
    });
    closeForm()
  }

  return (
    <div
      className={`form__container form__container--${isVisible && "active"}`}
    >
      <div className="form__header">
        <span
          className="form__header__close"
          role="button"
          onClick={() => closeForm()}
        >
          <AiFillCloseCircle />
        </span>
        <span className="form__header__title">Add new Place</span>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={handleOnSubmit}
      >
        {({ errors, touched, isValidating }) => (
          <FormikForm>
            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="picture">Picture url</label>
                <Field id="picture" name="picture" placeholder="" />
              </div>
              {errors.picture && <div className="errors">Required</div>}
            </div>
            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="title">Title</label>
                <Field id="title" name="title" placeholder="" />
              </div>
              {errors.title && <div className="errors">Required</div>}
            </div>
            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="description">description</label>
                <Field
                  id="description"
                  name="description"
                  placeholder="description"
                />
              </div>
              {errors.description && <div className="errors">Required</div>}
            </div>
            <div className="formGroup">
              <div className="formGroupInput">
                <label htmlFor="link">seeMoreLink</label>
                <Field id="link" name="seeMoreLink" placeholder="link" />
              </div>
              {errors.seeMoreLink && <div className="errors">Required</div>}
            </div>

            <div className="button__container">
              <button className="form__button" type="submit">Submit</button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;
  return {
    isVisible: places.placeFormIsVisible,
    position: places.prePlacePosition as LatLng,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeForm: () =>
      dispatch(setPlaceFormVisibility(false)),
    addNewPlace: (place: Place) => {
      dispatch(addNewPlaceAction(place))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

interface PlaceFormProps {
  [key: string]: string;
  picture: string;
  title: string;
  description: string;
  seeMoreLink: string;
}
