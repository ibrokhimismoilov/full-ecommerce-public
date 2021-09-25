import React, { useRef } from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";

const Checkbox = (props) => {
  const checkboxRef = useRef(null);
  const onChange = () => {
    if (props.onChange) {
      props.onChange(checkboxRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={checkboxRef}
        onChange={onChange}
        checked={props.checked}
      />
      <span className="custom-checkbox__checkmark">
        <AiOutlineCheck />
      </span>
      <span className="custom-checkbox__text">{props.label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default Checkbox;
