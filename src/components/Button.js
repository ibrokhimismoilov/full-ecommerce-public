import React from "react";
import PropTypes from "prop-types";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Button = (props) => {
  const className = props?.className ? props?.className : "";
  const bg = props?.backgroundColor
    ? "bg-" + props?.backgroundColor
    : "bg-main";
  const size = props?.size ? "btn-" + props.size : "";
  const animate = props?.animate ? "btn-animate" : "";
  const radius = props?.radius ? `btn-radius-${props.radius}` : "";

  return (
    <button
      type={props?.type || "button"}
      className={`btn ${bg} ${radius} ${size} ${animate} ${className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.animate ? (
        <span className="btn__icon">{<AiOutlineShoppingCart />}</span>
      ) : null}
      <span className="btn__text">{props.children}</span>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  animate: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  radius: PropTypes.string,
};

export default Button;
