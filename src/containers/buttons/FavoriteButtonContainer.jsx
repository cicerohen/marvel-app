import React from "react";
import Buttom from "../../components/Button";

import { useUserContext } from "../../contexts/User";

const FavoriteButtonContainer = ({ id }) => {
  const { favoriteCharacters, setFavoriteCharacters } = useUserContext();

  const isFavorited = React.useMemo(() => {
    return !!favoriteCharacters[id];
  }, [favoriteCharacters, id]);

  const favoriteCharacter = React.useCallback(() => {
    setFavoriteCharacters({
      ...favoriteCharacters,
      [id]: {
        id: id
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFavoriteCharacters, favoriteCharacters, id]);

  const unfavoriteCharacter = React.useCallback(() => {
    const newfavoriteCharacters = Object.keys(favoriteCharacters).reduce(
      (acc, key) => {
        if (Number(key) !== Number(id)) {
          acc[key] = {
            id: key
          };
        }
        return acc;
      },
      {}
    );
    setFavoriteCharacters(newfavoriteCharacters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFavoriteCharacters, favoriteCharacters, id]);

  const favoriteToggle = React.useCallback(() => {
    if (isFavorited) {
      unfavoriteCharacter();
    } else {
      favoriteCharacter();
    }
  }, [isFavorited, favoriteCharacter, unfavoriteCharacter]);

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
