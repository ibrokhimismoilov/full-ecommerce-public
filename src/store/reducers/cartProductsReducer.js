import {
  ADD_PRODUCT,
  BUY_FAIL,
  BUY_START,
  BUY_SUCCESS,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes";

const localStorageProducts =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  error: null,
  loading: false,
  products: localStorageProducts,
};

const cartProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const hasProduct = state.products.some(
        (item) => item.id === action.payload.id
      );
      if (hasProduct) {
        const addProductsUpdate = state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        console.log("addProductsUpdate >>>>", addProductsUpdate);
        return {
          ...state,
          products: addProductsUpdate,
        };
      } else {
        console.log("action.payload >>>>", action.payload);
        return {
          ...state,
          products: [...state.products, { ...action.payload }],
        };
      }
    }

    case UPDATE_PRODUCT: {
      const updatedProduct = state.products.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return {
        ...state,
        products: updatedProduct,
      };
    }

    case REMOVE_PRODUCT: {
      if (state.products.length > 1) {
        const removedProduct = state.products.filter(
          (item) => item.id !== action.payload
        );

        return {
          ...state,
          products: removedProduct,
        };
      } else {
        return {
          ...state,
          products: [],
        };
      }
    }

    case BUY_START: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }

    case BUY_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        products: [],
      };
    }

    case BUY_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default cartProductsReducer;
