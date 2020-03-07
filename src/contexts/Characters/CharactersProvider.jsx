import React from "react";

import Context from "./CharactersContext";

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = React.useState([]);
  const value = { characters, setCharacters };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CharactersProvider;
