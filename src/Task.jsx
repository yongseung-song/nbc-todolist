import React from "react";
import dayjs from "dayjs";

function Task({
  id,
  title,
  date,
  content,
  handleChecked,
  buttonText,
  handleDelete,
}) {
  return (
    <li key={id} className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <span>{date}</span>
      <div className="button-container">
        <button
          className="button card__button card__button-finish"
          onClick={() => handleChecked(id)}
        >
          {buttonText}
        </button>
        <button
          className="button card__button card__button-erase"
          onClick={() => handleDelete(id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default Task;
