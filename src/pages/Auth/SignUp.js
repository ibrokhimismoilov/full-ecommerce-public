import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { registerAction } from "../../store/actions/authActions";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  comfirmPassword: "",
  role: "user",
};

export default function SignUp() {
  const { currentUser, loading, error, loggedIn } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [value, setValue] = useState(initialState);
  const [passError, setPassError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (loggedIn) {
      history.replace("/");
    }
  }, [loggedIn, history]);

  useEffect(() => {
    if (loggedIn) {
      history.replace("/");
    }
    if (loading) {
      setPassError("");
    } else {
      if (error) {
        setPassError(error);
      }
    }
  }, [loading]);

  const signUpHandler = (e) => {
    e.preventDefault();
    setPassError("");

    console.log(value);

    if (value.password !== value.comfirmPassword) {
      setPassError("Password mos emas");
      return;
    }
    dispatch(
      registerAction(
        value.email,
        value.password,
        value.firstName,
        value.lastName,
        value.phone,
        value.role
      )
    );
    setPassError(currentUser?.payload);
  };

  return (
    <div className="auth">
      <form className="auth__form auth__form-register" onSubmit={signUpHandler}>
        <h1 className="auth__form-title">Register</h1>
        {passError && <span className="error-text">{passError}</span>}

        <p className="auth__form-description">
          Already have an account?{" "}
          <Link className="link" to="/sign-in">
            sign in.
          </Link>
        </p>
        <div className="auth__form-row">
          <div className="auth__form-group">
            <label>First name:</label>
            <input
              type="firstName"
              name="firstName"
              value={value.firstName}
              onChange={inputHandler}
              required
              className="auth__form-control"
            />
          </div>
          <div className="auth__form-group">
            <label>Last name:</label>
            <input
              type="lastName"
              name="lastName"
              value={value.lastName}
              onChange={inputHandler}
              required
              className="auth__form-control"
            />
          </div>
        </div>
        <div className="auth__form-row">
          <div className="auth__form-group">
            <label>Phone:</label>
            <input
              type="phone"
              name="phone"
              value={value.phone}
              onChange={inputHandler}
              required
              className="auth__form-control"
            />
          </div>
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
        </div>
        <div className="auth__form-row">
          <div className="auth__form-group auth__form-group_password">
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
          <div className="auth__form-group mb-1">
            <label>Comfirm password:</label>
            <input
              type={!showPass ? "password" : "text"}
              name="comfirmPassword"
              value={value.comfirmPassword}
              onChange={inputHandler}
              required
              className="auth__form-control"
            />
          </div>
        </div>
        {loading ? (
          <i className="auth-loader" />
        ) : (
          <div className="auth__form-group auth__form-btn">
            <Button type="submit">Register</Button>
          </div>
        )}
      </form>
    </div>
  );
}
