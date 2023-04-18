import React, { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../../store/FavoriteContext";

export default function MeetupItem(meetup) {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoriteContext);

  const { title, address, description, image, id } = meetup;
  const toggleFavoriteStatusHandler = () =>
    isFavorite(id) ? removeFavorite(id) : addFavorite(meetup);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div onClick={toggleFavoriteStatusHandler} className={classes.actions}>
          <button>
            {isFavorite(id) ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
