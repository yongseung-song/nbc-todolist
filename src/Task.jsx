import React from "react";

function Task({ id, title, date, content, handleChecked, buttonText }) {
  return (
    <li key={id} className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{date}</p>
      <div className="button-container">
        <button className="button card__button">삭제</button>
        <button
          className="button card__button"
          onClick={() => handleChecked(id)}
        >
          {buttonText}
        </button>
      </div>
    </li>
  );
}

export default Task;
