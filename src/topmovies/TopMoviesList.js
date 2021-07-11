import React from "react";
import TopMoviesItem from "./TopMoviesItem";

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
