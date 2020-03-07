import React from "react";
import ViewContainer from "../ViewContainer";
import CharactersListContainer from "../lists/CharactersListContainer";

import { useCharactersContext } from "../../contexts/Characters";

import useFetchApi from "../../hooks/useFetchApi";

const HomeViewContainer = () => {
  const { setCharacters } = useCharactersContext();
  const { isFetching, data: characters } = useFetchApi("/public/characters");

  React.useEffect(() => {
    if (characters) {
      setCharacters(characters);
    }
  }, [characters, setCharacters]);
  return (
    <ViewContainer title="Marvel characters">
      <CharactersListContainer isFetching={isFetching} />
    </ViewContainer>
  );
};

export default HomeViewContainer;
