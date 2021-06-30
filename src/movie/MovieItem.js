import React, { useRef, useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FiVideo } from "react-icons/fi";

const MovieItem = ({ movie, onOpen, onLike }) => {
  const { rank, id, overview, title, poster, date, done, popularity, rating } = movie;

  //video
  //    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`) // key값이 유투브 뒤에...
  return (
    <tr>
      <td>{rank}</td>
      <td className="img">
        <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt="" width="150" />
        <p>
          <span>{title}</span>
          {overview}
        </p>
      </td>
      <td>{date}</td>

      <td>{rating}</td>
      <td className="like">
        <i onClick={() => onLike(id)}>{done ? <FcLike /> : <FcLikePlaceholder />}</i>
        {Math.floor(popularity)}

        {/* {Math.floor(popularity)} */}
      </td>
      <td>
        <i onClick={() => onOpen(id)}>
          <FiVideo />
        </i>
      </td>
    </tr>
  );
};

export default MovieItem;
