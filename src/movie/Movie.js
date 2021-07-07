import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";
import Modal from "./Modal";
import "./Movie.css";

const Movie = () => {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [apiKey, setApiKkey] = useState("951e82f5d79e2739c92002427a43ca93");
  const [isActive, setIsActive] = useState(false);
  const [movie, setMovie] = useState({});
  const no = useRef(1);

  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const res = await fetch(url);
    const jsonData = await res.json();
    console.log(jsonData);
    const movieData = await jsonData.results.map((movie) => {
      return { rank: no.current++, id: movie.id, done: false, popularity: movie.popularity, overview: movie.overview, title: movie.title, poster: movie.poster_path, date: movie.release_date, rating: movie.vote_average };
    });
    setData(movieData);
    setMovies(movieData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearch = (text) => {
    const newData = data.filter((movie) => {
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

  const onLike = (id) => {
    setMovies(
      movies.map((movie) => {
        return movie.id === id ? { ...movie, done: !movie.done, popularity: movie.done ? movie.popularity - 1 : movie.popularity + 1 } : movie;
      })
    );
  };

  return (
    <div className="Movie container" >
      <div className="row">
        <h1> Popular Top Movies / {getdate()}</h1>;
        <MovieForm onSearch={onSearch} />
        <MovieList movies={movies} onOpen={onOpen} onLike={onLike} />
        {isActive && <Modal onClose={onClose} movie={movie} />}
      </div>
    </div>
  );
};

export default Movie;
