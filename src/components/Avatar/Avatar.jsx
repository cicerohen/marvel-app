import React from "react";

const Avatar = ({ url, name }) => {
  return (
    <div className="avatar">
      <img src={url} alt={name} />
      <div>{name}</div>
    </div>
  );
};

export default React.memo(Avatar);
