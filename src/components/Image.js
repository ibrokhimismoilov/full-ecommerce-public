import PropTypes from "prop-types";
import { useState } from "react";
import defaultImg from "../assets/images/default-placeholder.png";

const Image = (props) => {
  const [src, setSrc] = useState(props?.src ? props?.src : defaultImg);

  const errorHandler = (e) => {
    e.target.onerror = null;
    setSrc(defaultImg);
  };

  return (
    <img
      onClick={props?.onClick ? props?.onClick : null}
      className={props?.className ? props?.className : null}
      src={src}
      onError={errorHandler}
      alt={props.alt || "loading..."}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
