import { SET_COLOR, SET_MODE } from "../actionTypes";

const initialState = {
  mode: "",
  color: "",
};

const AdminThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default AdminThemeReducer;
