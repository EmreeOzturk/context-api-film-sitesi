import React from "react";
import Image from "next/image";
import styles from "../styles/MovieCard.module.css";
const MovieCard = ({ movie }) => {
  return (
    <div className={styles.movieCard}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={300}
        />
      </div>
      <div className={styles.buttonsAndInfo}>
        <div className={styles.movieInfo}>
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Add To Watchlist</button>
          <button className={styles.button}>Add To Watched</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
