import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "./Add.module.css";
import MovieCard from "../components/MovieCard";
const Add = ({ movies }) => {
  const [search, setSearch] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const searchMovies = async () => {
    const res = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=a6df002fb8cf462a5422096eaeb9cf14&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then((res) => {
        return res.data;
      });
    setSearchedMovies(res.results);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }
    searchMovies();
  }, [search]);

  const listMovies =
    search.length === 0
      ? movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      : searchedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ));

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
          alt="banner"
          fill
          priority
        />
        <div className={styles.titleContainer}>
          <h2 style={{}}>Hos Geldiniz.</h2>
          <p>Milyonlarca film, dizi ve oyuncu. Şimdi keşfedin.</p>
        </div>
        <input
          className={styles.search}
          type="text"
          placeholder="Film, dizi ve oyuncuları arayın"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div className={styles.weeklyMovies}>{listMovies}</div>
    </div>
  );
};

export default Add;

export async function getServerSideProps() {
  const movies = await axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_APP_API_KEY}`
    )
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      movies,
    },
  };
}
