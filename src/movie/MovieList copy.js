import React, { useEffect, useState } from "react";

const MovieList = (post) => {
  const [poster, setImg] = useState("");

  useEffect(() => {
    getImg(post);
  }, [poster]);

  const getImg = (path) => {
    fetch(`https://image.tmdb.org/t/p/w500${path}`)
      .then((res) => res.json())
      .then((res) => setImg(res));
  };
  return (
    <div>
      <h3>poster </h3>
      {console.log(post)}
      <img src={poster} alt="pic" />
    </div>
  );
};

export default MovieList;
