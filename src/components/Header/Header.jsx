import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import Logo from "../../assets/images/marvel-logo.png";

const Header = ({ onOpenSidebar }) => {
  return (
    <header className="header">
      <div className="header__left-content">
        <Button onClick={onOpenSidebar} size="small" palette="primary">
          Show sidebar
        </Button>
        <Link to="/">
          <Button size="small" palette="primary">
            Home
          </Button>
        </Link>

        <img src={Logo} height="30px" />
      </div>
      <div>
        <Link to="/me">
          <Button size="small" palette="primary">
            My account
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default React.memo(Header);
