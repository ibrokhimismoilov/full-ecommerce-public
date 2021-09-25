import React from "react";
import PropTypes from "prop-types";
import { GetIcon } from "./GetIcon";

const PolicyCard = (props) => {
  if (props.loading) {
    return (
      <div className="policy-card policy-card_loading">
        <div className="policy-card__icon">
          <GetIcon icon={"card"} />
        </div>
        <div className="policy-card__info">
          <p className="policy-card__info-name" />
          <p className="policy-card__info-description" />
        </div>
      </div>
    );
  }
  return (
    <div className="policy-card">
      <div className="policy-card__icon">
        <GetIcon icon={props.icon} />
      </div>
      <div className="policy-card__info">
        <h1 className="policy-card__info-name">{props.name}</h1>
        <p className="policy-card__info-description">{props.description}</p>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

export default PolicyCard;
