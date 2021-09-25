import React from "react";
import { GetIcon } from "../../../components/GetIcon";

const SidebarItem = (props) => {
  const active = props.active ? "active" : null;

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <div className="icon">
          <GetIcon icon={props.icon} />
        </div>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
