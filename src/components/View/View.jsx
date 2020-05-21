import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Title from "../Title";
const View = ({
  title,
  headerComponent,
  sidebarComponent,
  footerComponent,
  sidebarIsOpen,
  onOpenSidebar,
  onCloseSidebar,
  children,
}) => {
  return (
    <div className="view">
      <div className="view__header-container">
        {headerComponent || <Header onOpenSidebar={onOpenSidebar} />}
      </div>
      <div className="view__main-container">
        {sidebarIsOpen && (
          <div className="view__sidebar-container">
            {sidebarComponent || (
              <Sidebar title="App" onClose={onCloseSidebar} />
            )}
          </div>
        )}
        <main className="view__main">
          {title && <Title title={title} level="2" className="view__title" />}
          {children}
        </main>
      </div>
      <div className="view__footer-container">
        {footerComponent || <Footer />}
      </div>
    </div>
  );
};

export default View;
