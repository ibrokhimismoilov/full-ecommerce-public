import { combineReducers } from "redux";
import AdminThemeReducer from "./adminThemeReducer";
import cartProductsReducer from "./cartProductsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  admin: AdminThemeReducer,
  cartProducts: cartProductsReducer,
});

export default rootReducer;
