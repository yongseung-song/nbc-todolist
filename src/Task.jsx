import React from "react";
import dayjs from "dayjs";

function Task({ id, title, date, content, buttonText, onChangeHandler }) {
  return (
    <li key={id} className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <span>{date}</span>
      <div className="button-container">
        <button
          id="checkBtn"
          className="button card__button card__button-finish"
          onClick={(e) => onChangeHandler(e, id)}
        >
          {buttonText}
        </button>
        <button
          id="deleteBtn"
          className="button card__button card__button-erase"
          onClick={(e) => onChangeHandler(e, id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default Task;
