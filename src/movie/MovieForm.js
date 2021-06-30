import React, { useEffect, useState } from "react";
import "./MovieForm.css";

const MovieForm = ({ onSearch }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    onSearch(text);
  }, [text]);

  const changeInput = (ev) => {
    const { value } = ev.target;
    setText(value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    setText("");
  };

  return (
    <form className="MovieForm" onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} />
    </form>
  );
};

export default MovieForm;
