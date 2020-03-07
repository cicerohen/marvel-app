import React from "react";

import Context from "./ViewContext";

const ViewProvider = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);
  const value = {
    sidebarIsOpen,
    setSidebarIsOpen,
    showLoading,
    setShowLoading
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ViewProvider;
