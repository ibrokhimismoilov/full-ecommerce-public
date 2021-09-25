import {
  ADD_PRODUCT,
  BUY_FAIL,
  BUY_START,
  BUY_SUCCESS,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes";

import { db } from "../../firebase";

export const addProductAction = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProductAction = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const removeProductAction = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});

const buyStartAction = () => ({ type: BUY_START });
const buySuccessAction = (data) => ({ type: BUY_SUCCESS, payload: data });
const buyFailAction = (error) => ({ type: BUY_FAIL, payload: error });

export const buyNowAction = (userId, userName, userOrderProducts) => {
  return async (dispatch) => {
    dispatch(buyStartAction());
    try {
      await db
        .collection("orders")
        .doc()
        .set({
          date: new Date(),
          userId,
          userName,
          orders: [...userOrderProducts],
        });
      dispatch(buySuccessAction());
    } catch (error) {
      dispatch(buyFailAction(error.message));
    }
  };
};
