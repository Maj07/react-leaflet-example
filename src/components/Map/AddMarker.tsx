import React, { useState } from "react";
import { LatLng, LatLngExpression } from "leaflet";
import { Marker, useMapEvents } from "react-leaflet";
import { connect } from "react-redux";
import {
  setPlaceFormVisibility,
  setPrePlaceLocation,
} from "../../store/actions";
import { IState } from "../../store/models";

const AddMarker = ({ formIsOpen, toggleForm, setLocation }: any) => {
  const [position, setPosition] = useState(
    (null as unknown) as LatLngExpression
  );

  useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
      setLocation(e.latlng);
      toggleForm(true);
    },
  });

  return !formIsOpen || position === null ? null : (
    <Marker position={position}></Marker>
  );
};

const mapStateToProps = (state: IState) => {
  const { places } = state;

  return {
    formIsOpen: places.placeFormIsVisible,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleForm: (payload: boolean) => dispatch(setPlaceFormVisibility(payload)),
    setLocation: (payload: LatLng) => dispatch(setPrePlaceLocation(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMarker);
