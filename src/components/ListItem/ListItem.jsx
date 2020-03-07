import React from "react";
import classNames from "classnames";

const ListItem = ({ leftContent, rightContent, children, className }) => {
  const classes = classNames({
    list__item: true,
    "list__item--plain": !leftContent && !rightContent
  });

  return (
    <li className={`${classes} ${className}`}>
      {leftContent || rightContent ? (
        <>
          {leftContent && (
            <div className="list__item-left-content">{leftContent}</div>
          )}
          {rightContent && (
            <div className="list__item-right-content">{rightContent}</div>
          )}
        </>
      ) : (
        children
      )}
    </li>
  );
};

export default ListItem;
