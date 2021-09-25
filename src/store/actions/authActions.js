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

import {
  auth,
  db,
  facebookAuthProvider,
  googleAuthProvider,
} from "../../firebase";

const registerStart = () => ({ type: REGISTER_START });

const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });

const registerError = (error) => ({ type: REGISTER_FAIL, payload: error });

const loginStart = () => ({ type: LOGIN_START });

const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });

const loginError = (error) => ({ type: LOGIN_FAIL, payload: error });

const logoutStart = () => ({ type: LOGOUT_START });

const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

const logoutError = (error) => ({ type: LOGOUT_FAIL, payload: error });

const googleSignInStart = () => ({ type: GOOGLE_SIGN_IN_START });

const googleSignInSuccess = (user) => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInError = (error) => ({
  type: GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

const facebookSignInStart = () => ({ type: FACEBOOK_SIGN_IN_START });

const facebookSignInSuccess = (user) => ({
  type: FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
});

const facebookSignInError = (error) => ({
  type: FACEBOOK_SIGN_IN_FAIL,
  payload: error,
});

// actions

export const setUserAction = (user) => ({ type: SET_USER, payload: user });

export const registerAction = (email, password, firstName, lastName, phone) => {
  return async (dispatch) => {
    dispatch(registerStart());
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // console.log("register user =>>>", user);
      await db
        .collection("users")
        .doc(user.uid)
        .set({
          id: user.uid,
          email,
          password,
          firstName,
          lastName,
          phone,
          create: new Date(),
          update: new Date(),
          role: "user",
        })
        .then(async () => {
          const newUser = await db.collection("users").doc(user.uid).get();
          // console.log("register newUser =>>>", newUser);
          if (newUser.exists) {
            dispatch(registerSuccess(newUser.data()));
          } else {
            dispatch(
              registerError(
                "Don't read user \n Hozirgi user bilan SignIn qilib ko'ring"
              )
            );
          }
        });
    } catch (error) {
      dispatch(registerError(error.message));
    }
  };
};

export const loginAction = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      try {
        const newUser = await db.collection("users").doc(user.uid).get();
        if (newUser.exists) {
          dispatch(loginSuccess(newUser.data()));
        } else {
          dispatch(
            loginError(
              "Don't read user \n Hozirgi user bilan SignIn qilib ko'ring"
            )
          );
        }
      } catch (error) {
        dispatch(loginError(error.message));
      }
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    dispatch(logoutStart());
    auth
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
      })
      .catch((error) => {
        dispatch(logoutError(error.message));
      });
  };
};

export const googleSignInAction = () => {
  return async (dispatch) => {
    dispatch(googleSignInStart());
    try {
      const { user } = await auth.signInWithPopup(googleAuthProvider);
      dispatch(googleSignInSuccess({ user }));
    } catch (error) {
      dispatch(googleSignInError(error.message));
    }
  };
};

export const facebookSignInAction = () => {
  return async (dispatch) => {
    dispatch(facebookSignInStart());
    try {
      const { user } = await auth.signInWithPopup(
        facebookAuthProvider.addScope("user_birthday, email")
      );
      dispatch(facebookSignInSuccess({ user }));
    } catch (error) {
      dispatch(facebookSignInError(error.message));
    }
  };
};
