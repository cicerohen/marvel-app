import React from "react";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Title from "../../components/Title";

import { useCharacterContext } from "../../contexts/Character";
import useFetchApi from "../../hooks/useFetchApi";

const CharacterStoriesListContainer = () => {
  const { character } = useCharacterContext();
  const uri = `/public/characters/${character.id}/stories`;
  const { isFetching, data: stories } = useFetchApi(uri);
  return (
    <List showLoading={isFetching} height="200px">
      {stories.map(item => (
        <ListItem key={item.id}>
          <Title title={item.title} level="6" tag="h6" />
          <p>{item.description}</p>
        </ListItem>
      ))}
    </List>
  );
};

export default CharacterStoriesListContainer;
