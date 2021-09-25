import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { numberWithCommas } from "../utils/numberWithCommas";
import { ProductModalContext } from "../context/productModalContext";

const ProductCard = (props) => {
  const { contextProductValue, setContextProductValue } =
    useContext(ProductModalContext);

  const { img1, img2, title, price, id } = props;
  return (
    <div className="product-card">
      <Link to={`/catalog/${id}`}>
        <div className="product-card__img">
          <img src={img1} alt="product" />
          <img src={img2} alt="product" />
        </div>
        <h1 className="product-card__name">{title}</h1>
        <div className="product-card__price">
          {numberWithCommas(price)}
          <span className="product-card__price-old">
            <del>{numberWithCommas(399000)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          onClick={() => setContextProductValue(id)}
          className="btn btn__cart"
          size="sm"
          animate={true}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
