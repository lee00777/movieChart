import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, onOpen, onLike }) => {
  return (
    <div className="MovieList">
          {movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} onOpen={onOpen} onLike={onLike} />;
          })}
    </div>
  );
};

export default MovieList;
