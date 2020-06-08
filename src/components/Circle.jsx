import React from "react";
import PropTypes from "prop-types";

export default function Circle({ position }) {
  return <div className={`circle circle--${position}`}></div>;
}

Circle.propTypes = {
  position: PropTypes.oneOf(["top", "botton"]).isRequired,
};
