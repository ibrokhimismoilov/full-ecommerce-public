import { GET_THEME, SET_COLOR, SET_MODE } from "../actionTypes";

const setAdminActionMode = (mode) => {
  return {
    type: SET_MODE,
    payload: mode,
  };
};

const setAdminActionColor = (color) => {
  return {
    type: SET_COLOR,
    payload: color,
  };
};

const getAdminActionTheme = () => {
  return {
    type: GET_THEME,
  };
};

export { setAdminActionColor, setAdminActionMode, getAdminActionTheme };
