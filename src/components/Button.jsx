import React from "react";
import PropTypes from "prop-types";

export default function Button({ color, children, full }) {
  return (
    <button className={`button button--${color} ${full && "button--full"}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(["dark", "light"]).isRequired,
  full: PropTypes.bool,
};
