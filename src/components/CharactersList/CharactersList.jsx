import React from "react";
import CharactersListItem from "../CharactersListItem";

import List from "../List";

const CharactersList = ({
  characters = [],
  onShowDetails,
  favoriteButtonRender,
  ...rest
}) => {
  return (
    <List {...rest}>
      {characters.map(character => (
        <CharactersListItem
          key={character.id}
          id={character.id}
          name={character.name}
          description={character.description}
          onShowDetails={onShowDetails}
          favoriteButtonRender={favoriteButtonRender}
        />
      ))}
    </List>
  );
};

export default CharactersList;
