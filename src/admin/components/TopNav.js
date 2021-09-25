import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Dropdown from "./Dropdown";
import notification from "../assets/JsonData/notification.json";
import { Link, useHistory, useLocation } from "react-router-dom";
import user_menus from "../assets/JsonData/user_menus.json";
import userImg from "../assets/images/user.png";
import ThemeMenu from "./ThemeMenu";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/actions/authActions";
import { GetIcon } from "../../components/GetIcon";

const renderUserToggle = (user) => {
  return (
    <div className="topnav__right-user">
      <div className="img">
        <img src={user.img} alt="user" />
      </div>
      <div className="name">{user.firstName}</div>
    </div>
  );
};

const renderUserMenu = (item, index) => {
  return (
    <Link
      to={item.content.toLowerCase()}
      key={index}
      className="notification-item"
    >
      <span className="icon">
        <GetIcon icon={item.icon} />
      </span>
      <span>{item.content}</span>
    </Link>
  );
};

const renderNotificationItem = (item, index) => {
  return (
    <div key={index} className="notification-item">
      <span className="icon">
        <GetIcon icon={item.icon} />
      </span>
      <span>{item.content}</span>
    </div>
  );
};

const showMenu = () => {
  document.querySelector(".sidebar").classList.add("show");
};

const TopNav = () => {
  const { currentUser } = useSelector((state) => state.user);
  const currentUserAdmin = {
    firstName: currentUser.firstName || "Admin",
    img: userImg,
  };

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const logout = location.pathname.slice(location.pathname.lastIndexOf("/"));
    // console.log(logout);
    if (logout === "/logout") {
      dispatch(logoutAction());
      history.replace("/");
    }
  }, [location]);

  return (
    <div className="topnav">
      <div className="topnav__menu" onClick={showMenu}>
        <AiOutlineMenu />
      </div>
      <form className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <button className="icon" type="submit">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(currentUserAdmin)}
            contentData={user_menus}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bell"
            badge={12}
            contentData={notification}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View all</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
