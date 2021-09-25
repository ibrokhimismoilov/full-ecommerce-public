import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { GetIcon } from "./GetIcon";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../utils/numberWithCommas";
import {
  removeProductAction,
  updateProductAction,
} from "../store/actions/productActions";

const initialItem = {
  id: undefined,
  img: undefined,
  size: undefined,
  title: undefined,
  price: undefined,
  color: undefined,
  quantity: 1,
};

const CartItem = (props) => {
  const dispatch = useDispatch();

  const itemRef = useRef(null);

  const [item, setItem] = useState(initialItem);

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt > 0) {
      const newItem = { ...item, quantity: item.quantity + 1 };
      dispatch(updateProductAction(newItem));
    } else {
      const newItem = { ...item, quantity: item.quantity - 1 };
      dispatch(updateProductAction(newItem));
    }
  };

  const removeCartItem = (id) => {
    dispatch(removeProductAction(id));
  };

  return (
    <div className="cart__item" ref={itemRef}>
      <div className="cart__item-img">
        <img src={item.img} alt="Loading..." />
      </div>
      <div className="cart__item-content">
        <div className="cart__item-info">
          <div className="cart__item-name">
            <Link to={`/catalog/${item.id}`}>
              {`${item.title} - ${item.color} - ${item.size}`}
            </Link>
          </div>
          <div className="cart__item-price">
            <span className="info__item-price">
              {item?.price && (
                <>
                  {numberWithCommas(item?.price)}
                  {item.quantity > 1
                    ? ` * ${item.quantity} = ${numberWithCommas(
                        item?.price * item.quantity
                      )}`
                    : null}
                </>
              )}
            </span>
          </div>
        </div>
        <div className="cart__item-quantity">
          <div className="cart__item-quantity-item">
            <div
              className="cart__item-quantity-btn"
              onClick={item.quantity > 1 ? () => updateQuantity(-1) : null}
            >
              <GetIcon icon="minus" />
            </div>
            <div className="cart__item-quantity-input">{item.quantity}</div>
            <div
              className="cart__item-quantity-btn"
              onClick={() => updateQuantity(1)}
            >
              <GetIcon icon="plus" />
            </div>
          </div>
        </div>
        <div className="cart__item-del" onClick={() => removeCartItem(item.id)}>
          <GetIcon icon="delete" />
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
