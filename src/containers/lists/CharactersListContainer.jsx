import React from "react";

import CharactersList from "../../components/CharactersList";

import FavoriteButtonContainer from "../buttons/FavoriteButtonContainer";

import { useCharactersContext } from "../../contexts/Characters";
import { useCharacterDetailsModalContext } from "../../contexts/CharacterDetailsModal";

const favoriteButtonRender = (character) => {
  return <FavoriteButtonContainer id={character.id} />;
};

const CharactersListContainer = ({ isFetching }) => {
  const { characters } = useCharactersContext();
  const { setIsOpen, setCharacter } = useCharacterDetailsModalContext();

  const onShowDetails = React.useCallback(
    (selectedCharacter) => {
      const character = characters.find((character) => {
        return character.id === selectedCharacter.id;
      });
      if (character) {
        setCharacter(character);
        setIsOpen(true);
      }
    },
    [setIsOpen, setCharacter, characters]
  );

  return (
    <CharactersList
      characters={characters}
      showLoading={isFetching}
      onShowDetails={onShowDetails}
      favoriteButtonRender={favoriteButtonRender}
    />
  );
};

export default CharactersListContainer;
