import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import {
  facebookSignInAction,
  googleSignInAction,
  loginAction,
} from "../../store/actions/authActions";

const initialState = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [value, setValue] = useState(initialState);
  const [loginError, setLoginError] = useState("");
  const { loggedIn, loading, error } = useSelector((state) => state.user);
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const googleSingInHandler = () => {
    dispatch(googleSignInAction());
  };

  const facebookSingInHandler = () => {
    dispatch(facebookSignInAction());
  };

  useEffect(() => {
    if (loggedIn) {
      history.replace("/");
    }
  }, [loggedIn, history]);

  useEffect(() => {
    if (loading) {
      setLoginError("");
    } else {
      if (error) {
        setLoginError(error);
      }
    }
  }, [loading]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction(value.email, value.password));
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={loginHandler}>
        <h1 className="auth__form-title">Login</h1>
        {loginError && <span className="error-text">{loginError}</span>}
        <p className="auth__form-description">
          Do not you have an account?{" "}
          <Link className="link" to="/sign-up">
            sign up
          </Link>
          .
        </p>
        <div className="auth__form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={inputHandler}
            required
            className="auth__form-control"
          />
        </div>
        <div className="auth__form-group  auth__form-group_password">
          <label>Password:</label>
          <input
            type={!showPass ? "password" : "text"}
            name="password"
            value={value.password}
            onChange={inputHandler}
            required
            className="auth__form-control"
          />
          <div
            className="password-toggle"
            onClick={() => setShowPass((state) => !state)}
          >
            {!showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        {loading ? (
          <i className="auth-loader" />
        ) : (
          <>
            <div className="auth__form-group auth__form-btn">
              <Button type="submit">Login</Button>
            </div>
            <div className="auth__form-group auth__form-socials">
              <p className="auth__form-socials-text">or</p>
              <Button
                className="google"
                type="button"
                onClick={googleSingInHandler}
              >
                <FaGooglePlusG /> Google
              </Button>
              <Button
                className="facebook"
                type="button"
                onClick={facebookSingInHandler}
              >
                <FaFacebookF /> Facebook
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
