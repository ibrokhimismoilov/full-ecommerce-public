import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Helmet from "../components/Helmet";
import Loading from "../components/Loading";
import { buyNowAction } from "../store/actions/productActions";
import { numberWithCommas } from "../utils/numberWithCommas";

function Cart() {
  const dispatch = useDispatch();

  const { products, error, loading } = useSelector(
    (state) => state.cartProducts
  );

  const cartItems = products;
  const { currentUser } = useSelector((state) => state.user);

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(cartItems.length);
  }, [cartItems]);

  const buyNowHandler = () => {
    dispatch(buyNowAction(currentUser.id, currentUser.firstName, cartItems));
  };

  return (
    <Helmet title="Cart">
      {error && <span className="error-text">{error}</span>}
      <div className="cart">
        <div className="cart__info">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="cart__info-content">
                <p>Tovarlar soni {totalProducts} ta</p>
                <div className="cart__info-price">
                  <span>Total price:</span>{" "}
                  <span>{numberWithCommas(Number(totalPrice))}</span>
                </div>
              </div>
              <div className="cart__info-btn">
                <Button
                  disabled
                  size="sm"
                  onClick={totalProducts ? buyNowHandler : null}
                >
                  Buy now
                </Button>
                <Link to="/catalog">
                  <Button size="sm">Catalog</Button>
                </Link>
              </div>
            </>
          )}
        </div>
        {cartItems.length ? (
          <div className="cart__list">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <h1>No products</h1>
        )}
      </div>
    </Helmet>
  );
}

export default Cart;
