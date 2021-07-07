import React, { useRef, useState } from "react";
import './MovieItem.css'
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FiVideo } from "react-icons/fi";
import { Card } from "materialize-css";
import Numeral from 'numeral';

const MovieItem = ({ movie, onOpen, onLike }) => {
  const { rank, id, overview, title, poster, date, done, popularity, rating } = movie;
  return (
    <div className="col s12 m6 l3 " >

      <div className="card">
       <img  className="card-image" src={`https://image.tmdb.org/t/p/w200/${poster}`} alt="a poster" />
        <div className="card-text">
          <h2>{title}</h2>
          <p>Released : {date}</p>
          <p>Rating : {rating}</p>
        </div>
        <div className="card-stats">
          <div className="stat">
            <div className="value">
                <p>{rank}</p>
            </div>
            <div className="type">Rank</div>
          </div>
          <div className="stat border">
            <div className="value">
                <p onClick={() => onLike(id)}>
                  <i>{done ? <FcLike /> : <FcLikePlaceholder  />}</i>
                  &nbsp; {Numeral(Math.floor(popularity)).format(0, 0)}
                </p>
            </div>
            <div className="type">Likes</div>
          </div>
          <div className="stat">
              <div className="value">
                  <p>
                    <i onClick={() => onOpen(id)}><FiVideo /></i>
                  </p>
            </div>
            <div className="type">Trailer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
