import React, { useEffect, useState } from "react";
import "./Modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ onClose, movie }) => {
  const { rank, id, overview, title, poster, date, popularity, rating } = movie;
  const [videoKey, setVideoKey] = useState("");

  useEffect(() => {
    getVideoKey();
  }, []);

  const getVideoKey = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=951e82f5d79e2739c92002427a43ca93&language=en-US&page=1`;
    const res = await fetch(url);
    const jsonData = await res.json();
    setVideoKey(jsonData.results[0].key);
  };

  return (
    <div className="Modal">
      <div className="bg"></div>
      <div className="popup">
        <h2>Title : {title}</h2>
        <div>
          <iframe width="813" height="457" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>{rating}</p>
        <span>
          <i onClick={onClose}>
            <AiOutlineCloseCircle />
          </i>
        </span>
      </div>
    </div>
  );
};

export default Modal;
