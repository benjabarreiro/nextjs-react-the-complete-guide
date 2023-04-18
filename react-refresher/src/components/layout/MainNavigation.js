import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoriteContext from "../../store/FavoriteContext";

export default function MainNavigation() {
  const { totalFavorites } = useContext(FavoriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>{totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
