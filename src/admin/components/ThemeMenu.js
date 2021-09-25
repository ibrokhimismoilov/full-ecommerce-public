import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickOutsideRef } from "../utils/clickOutsideRef";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  setAdminActionColor,
  setAdminActionMode,
} from "../../store/actions/adminThemeActions";

const modeSettings = [
  {
    id: "light",
    name: "Light",
    background: "light-background",
    class: "theme-mode-light",
  },
  {
    id: "dark",
    name: "Dark",
    background: "dark-background",
    class: "theme-mode-dark",
  },
];

const colorSettings = [
  {
    id: "blue",
    name: "Blue",
    background: "blue-color",
    class: "theme-color-blue",
  },
  {
    id: "red",
    name: "Red",
    background: "red-color",
    class: "theme-color-red",
  },
  {
    id: "cyan",
    name: "cyan",
    background: "cyan-color",
    class: "theme-color-cyan",
  },
  {
    id: "green",
    name: "green",
    background: "green-color",
    class: "theme-color-green",
  },
  {
    id: "orange",
    name: "orange",
    background: "orange-color",
    class: "theme-color-orange",
  },
  {
    id: "pink",
    name: "pink",
    background: "pink-color",
    class: "theme-color-pink",
  },
];

const ThemeMenu = () => {
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);
  const [currMode, setCurrMode] = useState("light");
  const [currColor, setCurrColor] = useState("blue");

  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const setMode = (mode) => {
    setCurrMode(mode.id);
    dispatch(setAdminActionMode(mode.class));
  };

  const setColor = (color) => {
    setCurrColor(color.id);
    dispatch(setAdminActionColor(color.class));
  };

  useEffect(() => {
    const themeClass = modeSettings.find((e) => e.class === admin.mode);
    const colorClass = colorSettings.find((e) => e.class === admin.color);

    if (themeClass !== undefined) setCurrMode(themeClass.id);
    if (colorClass !== undefined) setCurrMode(colorClass.id);
  }, []);

  clickOutsideRef(menuRef, menuToggleRef);

  const setShowMenu = () => menuRef.current.classList.add("show");
  const closeMenu = () => menuRef.current.classList.remove("show");

  return (
    <div>
      <button
        ref={menuToggleRef}
        onClick={setShowMenu}
        className="dropdown__toggle"
      >
        <div className="dropdown__toggle-icon">
          <AiOutlineSetting />
        </div>
      </button>
      <div ref={menuRef} className="theme-menu">
        <h4 className="theme-menu__title">Theme settings</h4>
        <div className="theme-menu__close" onClick={closeMenu}>
          <AiOutlineClose />
        </div>
        <div className="theme-menu__select">
          <span>Choose menu</span>
          <ul className="mode-list">
            {modeSettings.map((item, index) => {
              return (
                <li
                  className="mode-list__item"
                  onClick={() => setMode(item)}
                  key={index}
                >
                  <div
                    className={`mode-list__color ${item.background} ${
                      item.id === currMode ? "checked" : ""
                    }`}
                  >
                    <AiOutlineCheck className="mode-list__icon" />
                  </div>
                  <span className="mode-list__text">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="theme-menu__select">
          <span>Choose color</span>
          <ul className="mode-list">
            {colorSettings.map((item, index) => {
              return (
                <li
                  className="mode-list__item"
                  onClick={() => setColor(item)}
                  key={index}
                >
                  <div
                    className={`mode-list__color ${item.background} ${
                      item.id === currColor ? "checked" : ""
                    }`}
                  >
                    <AiOutlineCheck className="mode-list__icon" />
                  </div>
                  <span className="mode-list__text">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThemeMenu;
