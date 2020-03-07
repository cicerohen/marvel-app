import React from "react";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

import { useCharacterContext } from "../../contexts/Character";
import useFetchApi from "../../hooks/useFetchApi";

const CharacterComicsListContainer = () => {
  const { character } = useCharacterContext();
  const uri = `/public/characters/${character.id}/comics`;
  const { isFetching, data: comics } = useFetchApi(uri);

  return (
    <List showLoading={isFetching} height="200px">
      {comics.map(item => (
        <ListItem key={item.id}>
          <Title title={item.title} level="6" tag="h6" />
          <p>{item.description}</p>
        </ListItem>
      ))}
    </List>
  );
};

export default CharacterComicsListContainer;
