import React from "react";
import Buttom from "../Button";
import Title from "../Title";
import ListItem from "../ListItem";

const CharactersListItem = ({
  id,
  name,
  description,
  onShowDetails,
  favoriteButtonRender,
}) => {
  const onShowDetailsHandler = () => {
    if (onShowDetails) {
      onShowDetails({ id, name, description });
    }
  };

  return (
    <ListItem
      className="list__item characters-list__item"
      leftContent={
        <>
          <Title title={name} level="6" tag="h4" />
          {description && <p>{description}</p>}
        </>
      }
      rightContent={
        <>
          {favoriteButtonRender && favoriteButtonRender({ id })}
          <Buttom size="small" onClick={onShowDetailsHandler}>
            Show details
          </Buttom>
        </>
      }
    />
  );
};

export default React.memo(CharactersListItem);
