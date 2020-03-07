import React from "react";

import Context from "./CharacterContext";

const CharacterProvider = ({ children, character }) => {
  return <Context.Provider value={{ character }}>{children}</Context.Provider>;
};

export default CharacterProvider;
