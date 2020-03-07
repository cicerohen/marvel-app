import React from "react";
import classNames from "classnames";

const Button = ({ children, size, palette, onClick }) => {
  const className = classNames({
    button: true,
    [`button--${size}`]: size,
    [`button--${palette}`]: palette
  });

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
