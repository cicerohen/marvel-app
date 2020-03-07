import React from "react";
import Title from "../../components/Title";

import ViewContainer from "../ViewContainer";
import CharactersListContainer from "../lists/CharactersListContainer";

import { useCharactersContext } from "../../contexts/Characters";
import { useUserContext } from "../../contexts/User";

import useFetchApi from "../../hooks/useFetchApi";

const MeViewContainer = () => {
  const { setCharacters } = useCharactersContext();
  const { favoriteCharacters } = useUserContext();
  const { isFetching, data: characters } = useFetchApi("/public/characters");

  React.useEffect(() => {
    if (characters) {
      const favoritedCharacters = characters.filter(
        character => !!favoriteCharacters[character.id]
      );
      setCharacters(favoritedCharacters);
    }
  }, [characters, favoriteCharacters, setCharacters]);

  return (
    <ViewContainer title="My Account">
      <Title title="My favorites characters" level="5" tag="h2" />
      <CharactersListContainer isFetching={isFetching} />
    </ViewContainer>
  );
};

export default MeViewContainer;
