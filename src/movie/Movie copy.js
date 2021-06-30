import React, { useEffect, useState } from "react";
import List from "./MovieList";

const Movie = () => {
  const [data, setData] = useState([]);
  const [apiKey, setApiKkey] = useState("951e82f5d79e2739c92002427a43ca93");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((res) => setData(res.results));
  };

  // const getImg = (path) => {
  //   fetch(`https://image.tmdb.org/t/p/w500${path}`)
  //     .then((res) => res.json())
  //     .then((res) => setImg(res.results));
  // };

  return (
    <div>
      {/* {data.map((item) => {
        return (
          <p key={item.id}>
            {item.title} / {item.overview} / {item.release_date} / {item.vote_average} setPoster(item.poster_path),
          </p>
        );
      })} */}
    </div>
  );
};

export default Movie;
