import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import Button from "../Button";
import SidebarTitle from "../SidebarTitle";

const SidebarHeader = ({ title, onCloseSidebar }) => {
  return (
    <div className="sidebar__header">
      <SidebarTitle title="SIDEBAR TITLE" />
      <Button size="small" onClick={onCloseSidebar}>
        Close
      </Button>
    </div>
  );
};

export default SidebarHeader;
