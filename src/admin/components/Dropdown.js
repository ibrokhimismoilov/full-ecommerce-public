import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { clickOutsideRef } from "../utils/clickOutsideRef";
import { GetIcon } from "../../components/GetIcon";

const Dropdown = (props) => {
  const toggleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    clickOutsideRef(contentRef, toggleRef);
  }, []);

  return (
    <div className="dropdown">
      <button ref={toggleRef} className="dropdown__toggle">
        {props.icon ? (
          <span className="dropdown__toggle-icon">
            <GetIcon icon={props.icon} />
          </span>
        ) : null}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : null}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={contentRef} className="dropdown__content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : null}
        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : null}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  icon: PropTypes.string,
  badge: PropTypes.number,
  customToggle: PropTypes.func,
  contentData: PropTypes.array,
  renderItems: PropTypes.func,
  renderFooter: PropTypes.func,
};

export default Dropdown;
