import React from "react";
import PropTypes from "prop-types";

import "./Button.css";
function Button({
  title,
  onButtonClicked = () => {},
  index = 0,
  customClassName = "plan-select-btn",
}) {
  const MARGIN_LEFT = !index ? 1 : 5;
  return (
    <>
      <button
        type="submit"
        className={customClassName}
        onClick={() => onButtonClicked(index)}
        style={{ marginLeft: MARGIN_LEFT }}
      >
        {title}
      </button>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  customClassName: PropTypes.string,
  index: PropTypes.number,
  onButtonClicked: PropTypes.func,
};

export default React.memo(Button);
