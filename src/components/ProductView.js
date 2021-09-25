import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import Button from "./Button";
import { numberWithCommas } from "../utils/numberWithCommas";
import { useDispatch } from "react-redux";
import { addProductAction } from "../store/actions/productActions";
import { GetIcon } from "./GetIcon";
import Image from "./Image";

const initialProduct = {
  id: undefined,
  img: undefined,
  size: undefined,
  title: undefined,
  price: undefined,
  color: undefined,
  quantity: 1,
};

const ProductView = (props) => {
  const { product } = props;
  const adminView = props?.adminView ? false : true;
  const [previewImg, setPreviewImg] = useState("");
  const [showDesc, setShowDesc] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [addToCartState, setAddToCartState] = useState(initialProduct);
  const closeModal = props?.closeModal ? props?.closeModal : null;

  useEffect(() => {
    setPreviewImg(product?.img1);
    setAddToCartState((state) => ({
      ...state,
      quantity: 1,
      size: undefined,
      color: undefined,
      id: product.id,
      img: product.img1,
      title: product.title,
      price: product.price,
    }));
    setShowDesc(false);
  }, [product]);

  const check = () => {
    if (addToCartState.color === undefined) {
      setError("Iltimos color'ni tanlang");
      return false;
    }

    if (addToCartState.size === undefined) {
      setError("Iltimos size'ni tanlang");
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) {
      setError("");
      dispatch(addProductAction(addToCartState));
      closeModal && closeModal();
    }
  };

  const goToCart = () => {
    if (check()) {
      setError("");
      dispatch(addProductAction(addToCartState));
      closeModal && closeModal();
      history.push("/cart");
    }
  };

  return (
    <div className="product">
      <div className="product__img">
        <div className="product__img-list">
          <div className="product__img-item">
            <Image
              src={product?.img1}
              onClick={() => setPreviewImg(product?.img1)}
            />
            {/* <img src={product?.img1} alt="loading..." /> */}
          </div>
          <div className="product__img-item">
            <img
              src={product?.img2}
              onClick={() => setPreviewImg(product?.img2)}
              alt="loading..."
            />
          </div>
        </div>
        <div className="product__img-main">
          <img src={previewImg} alt="loading..." />
        </div>
        <div className={`product__desc ${showDesc ? "expand" : ""}`}>
          <h1 className="product__desc-title">{product?.title}</h1>
          <div
            className="product__desc-content"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
          <div className="product__desc-toggle">
            <Button size="sm" onClick={() => setShowDesc(!showDesc)}>
              Read more
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info info">
        {error && <span className="error-text">{error}</span>}

        <h1 className="info__title">{product?.title}</h1>
        <div className="info__item">
          <span className="info__item-price">
            {product?.price && (
              <>
                {numberWithCommas(product?.price)}
                {addToCartState.quantity > 1
                  ? ` * ${addToCartState.quantity} = ${numberWithCommas(
                      product?.price * addToCartState.quantity
                    )}`
                  : null}
              </>
            )}
          </span>
        </div>
        <div className="info__item">
          <div className="info__item-title">colors</div>
          <div className="info__list">
            {product?.colors?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`info__list-item ${
                    addToCartState.color === item ? "active" : ""
                  }`}
                  onClick={() =>
                    setAddToCartState((state) => ({
                      ...state,
                      color: item,
                    }))
                  }
                >
                  <div className={`circle bg-${item}`}></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="info__item">
          <div className="info__item-title">Sizes</div>
          <div className="info__list">
            {product?.size?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`info__list-item ${
                    addToCartState.size === item ? "active" : ""
                  }`}
                  onClick={() =>
                    setAddToCartState((state) => ({
                      ...state,
                      size: item,
                    }))
                  }
                >
                  <div className="info__list-item-size">{item}</div>
                </div>
              );
            })}
          </div>
        </div>
        {adminView && (
          <>
            <div className="info__item">
              <div className="info__item-title">Quantity</div>
              <div className="info__quantity">
                <div className="info__quantity-item">
                  <div
                    className="info__quantity-btn"
                    onClick={
                      addToCartState.quantity > 1
                        ? () =>
                            setAddToCartState((state) => ({
                              ...state,
                              quantity: state.quantity - 1,
                            }))
                        : null
                    }
                  >
                    <GetIcon icon="minus" />
                  </div>
                  <div className="info__quantity-input">
                    {addToCartState.quantity}
                  </div>
                  <div
                    className="info__quantity-btn"
                    onClick={() =>
                      setAddToCartState((state) => ({
                        ...state,
                        quantity: state.quantity + 1,
                      }))
                    }
                  >
                    <GetIcon icon="plus" />
                  </div>
                </div>
              </div>
            </div>
            <div className="info__item">
              <Button onClick={() => addToCart()} animate={true}>
                Add to cart
              </Button>
              <Button onClick={() => goToCart()}>Buy now</Button>
            </div>
          </>
        )}
      </div>
      <div className={`product__desc mobile ${showDesc ? "expand" : ""}`}>
        <h1 className="product__desc-title">{product?.title}</h1>
        <div
          className="product__desc-content"
          dangerouslySetInnerHTML={{ __html: product?.description }}
        />
        <div className="product__desc-toggle">
          <Button size="sm" onClick={() => setShowDesc(!showDesc)}>
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
  adminView: PropTypes.bool,
};

export default ProductView;
