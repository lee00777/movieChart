import React from "react";
import { Route } from "react-router-dom";
import TopMoviesItem from "./TopMoviesItem";
import TopMoviesDetails from "./TopMoviesDetails";

const TopMoviesList = ({ movies, onOpen, onLike }) => {
  return (
    <div className="MovieList">
      {movies.map((movie) => {
        return <TopMoviesItem key={movie.id} movie={movie} onOpen={onOpen} onLike={onLike} />;
      })}
    </div>
  );
};

export default TopMoviesList;
