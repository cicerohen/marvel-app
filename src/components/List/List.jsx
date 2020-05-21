import React from "react";
import ReactLoading from "react-loading";
import classNames from "classnames";

const List = ({ showLoading = true, height, children, className }) => {
  const classes = classNames({
    "list-wrapper": true,
    "list--scrollable": !!height,
    "list--is-loading": showLoading,
  });

  return (
    <div className={`${classes} ${className}`} style={{ height: height }}>
      {showLoading && (
        <div className="list__loader-wrapper">
          <ReactLoading type="spin" color="#333" width="50px" />
        </div>
      )}
      <ul className="list">{children}</ul>
    </div>
  );
};

export default List;
