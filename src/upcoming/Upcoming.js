import React, { useEffect, useState } from "react";
import axios from "axios";

const Upcoming = () => {
  const [data, setData] = useState([]);
  const apiKey = "951e82f5d79e2739c92002427a43ca93";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setData([]);
        setLoading(true);
        setError("It seems like there is an error. Please try again.");
      });
  };

  return (
    <div>
      {data && loading ? (
        <h3> Loading... </h3>
      ) : (
        data.map((item) => {
          return (
            <p key={item.id}>
              {item.id} / title: {item.title} / date: {item.release_date}{" "}
            </p>
          );
        })
      )}
      {error ? error : null}
    </div>
  );
};

export default Upcoming;
