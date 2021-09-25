import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button";

const HeroSliderItem = (props) => {
  const { data, active } = props;

  return (
    <div className={`hero-slider__item ${active ? "active" : ""}`}>
      <div className="hero-slider__item-info">
        <h1 className={`hero-slider__item-title color-${data.color}`}>
          <span>{data.title}</span>
        </h1>
        <p className="hero-slider__item-description">
          <span>{data.description}</span>
        </p>
        <Link to={data.path} className="hero-slider__item-btn">
          <Button animate={true} backgroundColor={data.color}>
            Add to cart
          </Button>
        </Link>
      </div>
      <div className="hero-slider__item-img">
        <div className={`shape bg-${data.color}`}></div>
        <img src={data.img} alt="slide" />
      </div>
    </div>
  );
};

HeroSliderItem.propTypes = {
  data: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
};

export default HeroSliderItem;
