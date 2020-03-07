import React from "react";

import SidebarHeader from "../SidebarHeader";

const Sidebar = ({ title, onClose, children }) => {
  return (
    <aside className="sidebar">
      <SidebarHeader onCloseSidebar={onClose} />
      <div className="sidebar__main-content">CONTENT{children}</div>
      <div className="sidebar__footer">FOOTER SIDEBAR</div>
    </aside>
  );
};

export default Sidebar;
