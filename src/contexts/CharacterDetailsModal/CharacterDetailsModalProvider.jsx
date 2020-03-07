import React from "react";

import Context from "./CharacterDetailsModalContext";

const CharacterDetailsModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [character, setCharacter] = React.useState({});
  const value = { isOpen, setIsOpen, character, setCharacter };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CharacterDetailsModalProvider;
