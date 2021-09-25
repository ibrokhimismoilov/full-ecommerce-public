import React from "react";
import PropTypes from "prop-types";
import { GetIcon } from "../../components/GetIcon";

const StatusCard = (props) => {
  return (
    <div className="status-card">
      <div className="status-card__icon">
        <GetIcon icon={props.icon} />
      </div>
      <div className="status-card__info">
        <h4 className="status-card__count">{props.count}</h4>
        <span className="status-card__title">{props.title}</span>
      </div>
    </div>
  );
};

StatusCard.propTypes = {
  count: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default StatusCard;
