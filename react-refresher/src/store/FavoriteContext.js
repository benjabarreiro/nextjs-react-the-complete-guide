import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteHandler = (meetup) =>
    setFavorites((prev) => [...prev, meetup]);

  const removeFavoriteHandler = (id) =>
    setFavorites((prev) => prev.filter((meetup) => meetup.id !== id));

  const isFavoriteHandler = (id) =>
    favorites.find((meetup) => meetup.id === id);

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
