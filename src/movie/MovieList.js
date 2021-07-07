import React, { useEffect, useState } from "react";
import "./MovieList.css";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, onOpen, onLike }) => {
  return (
    <div className="MovieList">
      {/* <table>
        <colgroup>
          <col className="w1" />
          <col className="w2" />
          <col className="w3" />
          <col className="w4" />
          <col className="w5" />
          <col className="w6" />
        </colgroup>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Title & Overview </th>
            <th>Release date</th>
            <th>Rating</th>
            <th>Likes</th>
            <th>Video</th>
          </tr>
        </thead> */}
        {/* <tbody> */}
          {movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} onOpen={onOpen} onLike={onLike} />;
          })}
        {/* </tbody> */}
      {/* </table> */}
    </div>
  );
};

export default MovieList;
