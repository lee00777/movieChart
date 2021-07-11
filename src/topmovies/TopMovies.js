import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import MovieForm from "../movie/MovieForm";
import "../movie/Movie.css";
import TopMoviesList from "./TopMoviesList";
import Modal from "./Modal";
import { Route, Switch } from "react-router-dom";
import TopMoviesDetails from "./TopMoviesDetails";

const Upcoming = () => {
  const [data, setData] = useState([]);
  const apiKey = "951e82f5d79e2739c92002427a43ca93";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [movie, setMovie] = useState({});
  const no = useRef(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    axios
      .get(url)
      .then((res) => {
        const movieData = res.data.results.map((movie) => {
          return { rank: no.current++, id: movie.id, done: false, popularity: movie.popularity, overview: movie.overview, title: movie.title, poster: movie.poster_path, date: movie.release_date, rating: movie.vote_average };
        });
        setData(movieData);
        setMovies(movieData);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setData([]);
        setLoading(true);
        setError("It seems like there is an error. Please try again.");
      });
  };

  const onSearch = (text) => {
    const newData = data.filter((movie) => {
      const re = new RegExp(text, "ig");
      return movie.title.match(re);
    });
    setMovies(newData);
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
    <div className="Movie container">
      {
        <Route path="/topmovies/details/:id">
          <TopMoviesDetails />
        </Route>
      }
      <div className="row">
        <MovieForm onSearch={onSearch} />
        <TopMoviesList movies={movies} onOpen={onOpen} onLike={onLike} />
        {isActive && <Modal onClose={onClose} movie={movie} />}
      </div>
      {/* {data && loading ? (
        <h3> Loading... </h3>
      ) : (
        data.map((item) => {
          return (
            <p key={item.id}>
              {item.id} / title: {item.title} / date: {item.release_date}{" "}
            </p>
          );
        })
      )}
      {error ? error : null} */}
    </div>
  );
};

export default Upcoming;
