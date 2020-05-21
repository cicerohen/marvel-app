import React from "react";
import Buttom from "../../components/Button";

import { useUserContext } from "../../contexts/User";

const FavoriteButtonContainer = ({ id }) => {
  const { favoriteCharacters, setFavoriteCharacters } = useUserContext();

  const isFavorited = !!favoriteCharacters[id];

  const favoriteCharacter = () => {
    setFavoriteCharacters({
      ...favoriteCharacters,
      [id]: {
        id: id,
      },
    });
  };

  const unfavoriteCharacter = () => {
    const newfavoriteCharacters = Object.keys(favoriteCharacters).reduce(
      (acc, key) => {
        if (Number(key) !== Number(id)) {
          acc[key] = {
            id: key,
          };
        }
        return acc;
      },
      {}
    );
    setFavoriteCharacters(newfavoriteCharacters);
  };

  const favoriteToggle = () => {
    if (isFavorited) {
      unfavoriteCharacter();
    } else {
      favoriteCharacter();
    }
  };

  return (
    <Buttom
      size="small"
      palette={(isFavorited && "success") || undefined}
      onClick={favoriteToggle}
    >
      Favorite
    </Buttom>
  );
};

export default FavoriteButtonContainer;
