import React from "react";
import View from "../components/View";
import { useViewContext } from "../contexts/View";

const ViewContainer = (props) => {
  const { sidebarIsOpen, setSidebarIsOpen } = useViewContext();

  const onOpenSidebar = () => {
    setSidebarIsOpen(true);
  };

  const onCloseSidebar = () => {
    setSidebarIsOpen(false);
  };

  return (
    <View
      sidebarIsOpen={sidebarIsOpen}
      onOpenSidebar={onOpenSidebar}
      onCloseSidebar={onCloseSidebar}
      {...props}
    />
  );
};

export default ViewContainer;
