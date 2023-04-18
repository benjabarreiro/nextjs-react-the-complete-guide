import React, { useContext } from "react";
import FavoriteContext from "../store/FavoriteContext";
import MeetupList from "../components/meetups/MeetupList";

export default function FavoritesPage() {
  const { favorites, totalFavorites } = useContext(FavoriteContext);

  let content;

  if (totalFavorites === 0)
    content = <p>You got no favorites yet. Start adding some?</p>;
  else content = <MeetupList meetups={favorites} />;
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
