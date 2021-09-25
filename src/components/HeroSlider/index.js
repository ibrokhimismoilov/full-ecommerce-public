import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import HeroSliderItem from "./HeroSliderItem";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HeroSlider = (props) => {
  const { data, control } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const timeOut = props.timeOut ? props.timeOut : 3000;

  const slideControl = useCallback(
    (e) => {
      if (e < 0) {
        activeSlide === 0 ? setActiveSlide(data.length - 1) : setActiveSlide(0);
      } else {
        activeSlide === data.length - 1
          ? setActiveSlide(0)
          : setActiveSlide(activeSlide + 1);
      }
    },
    [activeSlide, data]
  );

  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        slideControl(1);
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [timeOut, props, slideControl]);

  return (
    <div className="hero-slider">
      {data.map((item, index) => {
        return (
          <HeroSliderItem
            data={item}
            active={activeSlide === index}
            key={index}
          />
        );
      })}
      {control && (
        <div className="hero-slider__control">
          <div
            className="hero-slider__control-item"
            onClick={() => slideControl(-1)}
          >
            <AiOutlineLeft />
          </div>
          <div className="hero-slider__control-item">
            {activeSlide + 1} / {data.length}
          </div>
          <div
            className="hero-slider__control-item"
            onClick={() => slideControl(1)}
          >
            <AiOutlineRight />
          </div>
        </div>
      )}
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

export default HeroSlider;
