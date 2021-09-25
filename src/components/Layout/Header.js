import React, { useEffect, useRef } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { mainNav } from "../../constants";
import Button from "../Button";
import { logoutAction } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { loggedIn, currentUser } = useSelector((state) => state.user);
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  const history = useHistory();
  const menuToggleHandler = () => menuRef?.current?.classList?.toggle("show");
  const menuCloseHandler = () => menuRef?.current?.classList?.remove("show");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef?.current?.classList.add("shrink");
      } else {
        headerRef?.current?.classList.remove("shrink");
      }
    });
  }, []);

  const logoutHandler = () => {
    history.push("/");
    dispatch(logoutAction());
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/" className="header__logo-inner">
            JSXDEV
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu-toggle" onClick={menuToggleHandler}>
            <CgMenuLeft />
          </div>
          <div className="header__left" ref={menuRef}>
            <div className="header__menu-close" onClick={menuCloseHandler}>
              <GrClose />
            </div>
            {mainNav.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`header__menu-item header__left-item ${
                    index === activeNav ? "active" : ""
                  }`}
                >
                  <Link onClick={menuCloseHandler} to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              );
            })}
          </div>
          {loggedIn ? (
            <div className="header__right">
              <div className="header__menu-item header__right-item">
                <AiOutlineSearch />
              </div>
              <Link
                to="/cart"
                className="header__menu-item header__right-item header__right-item-badge"
              >
                <FaOpencart />
                <span className="header__right-badge">
                  {cartProducts.products.length}
                </span>
              </Link>
              <div className="header__menu-item header__right-item">
                <AiOutlineUser />

                <div className="header__right-userlist">
                  <Link to="/">User</Link>
                  {currentUser?.role === "admin" ? (
                    <Link to="/admin">Admin</Link>
                  ) : null}
                  <Button size="sm" onClick={logoutHandler}>
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="header__right header__right-auth">
              <Link to="/sign-in" className="mr-_5">
                <Button size="sm">Sign in</Button>
              </Link>
              <Link to="/sign-up">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
