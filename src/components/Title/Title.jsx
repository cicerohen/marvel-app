import React from "react";
import classNames from "classnames";

const Title = ({ title, level, palette, tag = "h1", className }) => {
  const Tag = tag;
  const classes = classNames({
    title: true,
    [`title--${level}`]: level,
    [`title--${palette}`]: palette,
  });

  return <Tag className={`${className} ${classes}`}>{title}</Tag>;
};

export default React.memo(Title);
