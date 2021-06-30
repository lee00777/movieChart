import React from "react";
import "./Modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = ({ onClose, movie }) => {
  const { rank, id, overview, title, poster, date, popularity, rating } = movie;
  return (
    <div className="Modal">
      <div className="bg"></div>
      <div className="popup">
        <h2>Title : {title}</h2>
        <div>{/* <iframe width="813" height="457" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}</div>
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
