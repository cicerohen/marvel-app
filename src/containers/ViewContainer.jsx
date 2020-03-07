import React from "react";
import View from "../components/View";
import { useViewContext } from "../contexts/View";

const ViewContainer = props => {
  const { sidebarIsOpen, setSidebarIsOpen } = useViewContext();

  const onOpenSidebar = React.useCallback(() => {
    setSidebarIsOpen(true);
  }, [setSidebarIsOpen]);

  const onCloseSidebar = React.useCallback(() => {
    setSidebarIsOpen(false);
  }, [setSidebarIsOpen]);

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
