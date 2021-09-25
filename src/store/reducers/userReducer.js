import {
  FACEBOOK_SIGN_IN_FAIL,
  FACEBOOK_SIGN_IN_START,
  FACEBOOK_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAIL,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  SET_USER,
} from "../actionTypes";

const initialState = {
  loading: false,
  loggedIn: false,
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_SIGN_IN_START:
    case GOOGLE_SIGN_IN_START:
    case LOGOUT_START:
    case LOGIN_START:
    case REGISTER_START:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case FACEBOOK_SIGN_IN_SUCCESS:
    case GOOGLE_SIGN_IN_SUCCESS:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        loggedIn: true,
        currentUser: { ...action.payload },
      };

    case FACEBOOK_SIGN_IN_FAIL:
    case GOOGLE_SIGN_IN_FAIL:
    case LOGOUT_FAIL:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        error: null,
        currentUser: { ...state.currentUser, ...action.payload },
      };

    case LOGOUT_SUCCESS:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
