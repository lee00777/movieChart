import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const apiKey = "951e82f5d79e2739c92002427a43ca93";
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`;
    const res = await fetch(url);
    const jsonData = await res.json();
    const movieData = await {
      overview: jsonData.overview,
      title: jsonData.title,
      rating: jsonData.vote_average,
      date: jsonData.release_date,
      homepage: jsonData.homepage,
      runtime: jsonData.runtime,
      production: jsonData.production_companies[0].name,
      genres: jsonData.genres[0].name,
      language: jsonData.spoken_languages[0].name,
      poster: jsonData.poster_path,
    };
    setDetail(movieData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="detail col s10 m10 l10">
      <div className="card horizontal" style={{ width: "70vw", margin: "10rem auto" }}>
        <img className="card-image" src={`https://image.tmdb.org/t/p/w200/${detail.poster}`} alt="a poster" style={{ width: "300px" }} />
        <div className="card-stacked">
          <div className="card-content">
            <p className="title">{detail.title}</p>
            <div>
              <p className="date">{detail.date} </p>
              <p className="runtime">({detail.runtime} minutes)</p>
            </div>
            <p className="genres">{detail.genres}</p>
            <hr />
            <p className="overview">{detail.overview}</p>
            <p className="language">
              <span style={{ fontWeight: "bold", color: "black" }}>Language </span>: {detail.language}
            </p>
            <p className="production">
              <span style={{ fontWeight: "bold", color: "black" }}>Production </span>: {detail.production}
            </p>
            <p className="website">
              <span style={{ fontWeight: "bold", color: "black" }}>Website </span> :
              <a href={detail.homepage} style={{ color: "darkblue" }}>
                &nbsp;{" "}
                <i>
                  <FaLink />
                </i>
                &nbsp; Click here
              </a>
            </p>
          </div>
          <div className="card-action" style={{ textAlign: "center" }}>
            <Link to="/" style={{ color: "green", fontWeight: 500 }}>
              Go back to the main page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
