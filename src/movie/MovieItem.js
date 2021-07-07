import React, { useRef, useState } from "react";
import './MovieItem.css'
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FiVideo } from "react-icons/fi";
import { Card } from "materialize-css";

const MovieItem = ({ movie, onOpen, onLike }) => {
  const { rank, id, overview, title, poster, date, done, popularity, rating } = movie;

  return (

    <div className="col s12 m6 l3 " >
      {/* <div className="movieCard" >
        <p>Top {rank} </p>
        <div className="card-image">
          <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt="a poster" width="50%"/>
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{date}</p>
          <p>{rating}</p>
        </div>

        <div className="card-action">
          <p>
           <i onClick={() => onLike(id)}>{done ? <FcLike /> : <FcLikePlaceholder />}</i>
            {Math.floor(popularity)}
          </p>
          <p>
            <i onClick={() => onOpen(id)}><FiVideo /></i>
          </p>
        </div>
        <p>{overview}</p>
      </div> */}


      <div className="card">
       <img  className="card-image" src={`https://image.tmdb.org/t/p/w200/${poster}`} alt="a poster" />
        {/* <div className="card-image"></div> */}
        <div className="card-text">
          <h2>{title}</h2>
          <p>Released : {date}</p>
          <p>Rating : {rating}</p>
          {/* <p>{overview}</p> */}
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
                <p>
                  <i onClick={() => onLike(id)}>{done ? <FcLike /> : <FcLikePlaceholder  />}</i>
                  {Math.floor(popularity)}
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
