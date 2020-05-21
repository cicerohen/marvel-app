import React from "react";
import CharacterDetailsModal from "../../components/CharacterDetailsModal";

import CharacterComicsListContainer from "../lists/CharacterComicsListContainer";
import CharacterSeriesListContainer from "../lists/CharacterSeriesListContainer";
import CharacterStoriesListContainer from "../lists/CharacterStoriesListContainer";
import CharacterEventsListContainer from "../lists/CharacterEventsListContainer";

import { useCharacterDetailsModalContext } from "../../contexts/CharacterDetailsModal";
import { CharacterProvider } from "../../contexts/Character";

const CharacterDetailsModalContainer = () => {
  const { isOpen, setIsOpen, character } = useCharacterDetailsModalContext();

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <CharacterProvider character={character}>
      <CharacterDetailsModal
        character={character}
        isOpen={isOpen}
        onClose={onClose}
        characterComicsList={<CharacterComicsListContainer />}
        characterSeriesList={<CharacterSeriesListContainer />}
        characterStoriesList={<CharacterStoriesListContainer />}
        characterEventsList={<CharacterEventsListContainer />}
      />
    </CharacterProvider>
  );
};

export default CharacterDetailsModalContainer;
