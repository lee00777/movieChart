import React, { useEffect, useRef, useState } from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import Modal from "./Modal";
import "./Movie.css";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [apiKey, setApiKkey] = useState("951e82f5d79e2739c92002427a43ca93");
  const [isActive, setIsActive] = useState(false);
  const [movie, setMovie] = useState({});
  const no = useRef(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((res) =>
        setMovies(
          res.results.map((movie) => {
            return { rank: no.current++, id: movie.id, popularity: movie.popularity, overview: movie.overview, title: movie.title, poster: movie.poster_path, date: movie.release_date, rating: movie.vote_average };
          })
        )
      );
  };

  const onSearch = (text) => {
    const newData = movies.filter((movie) => {
      const re = new RegExp(text, "ig");
      return movie.title.match(re);
    });
    setMovies(newData);
  };

  const getdate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const msg = `${year}.${month}.${date}`;
    return msg;
  };

  const onOpen = (id) => {
    setIsActive(true);
    setMovie(
      movies.find((movie) => {
        return movie.id === id;
      })
    );
  };

  const onClose = () => {
    setIsActive(false);
  };

  return (
    <div className="Movie">
      <h2> Popular Top Movies / {getdate()}</h2>;
      <MovieForm onSearch={onSearch} />
      <MovieList movies={movies} onOpen={onOpen} />
      {isActive && <Modal onClose={onClose} movie={movie} />}
    </div>
  );
};

export default Movie;