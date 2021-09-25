import React from "react";
import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import { clickOutsideRef } from "../../utils/clickOutsideRef";
import SidebarItem from "./sidebarItem";

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  const menuRef = useRef();
  const menuToggleRef = useRef();

  clickOutsideRef(menuRef, menuToggleRef);

  return (
    <div className="sidebar" ref={menuRef}>
      <div ref={menuToggleRef} className="sidebar__close">
        <AiOutlineClose />
      </div>
      <div className="sidebar__logo">
        JSX<span>DEV</span>
      </div>
      {sidebar_items.map((item, index) => {
        return (
          <Link key={index} to={`${item.route}`}>
            <SidebarItem
              active={index === activeItem}
              title={item.display_name}
              icon={item.icon}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
