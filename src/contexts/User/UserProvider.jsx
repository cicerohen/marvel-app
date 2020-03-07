import React from "react";

import Context from "./UserContext";

const UserProvider = ({ children }) => {
  const [favoriteCharacters, setFavoriteCharacters] = React.useState({});
  const value = { favoriteCharacters, setFavoriteCharacters };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default UserProvider;
