import React from "react";

function Task({ id, title, content, handleChecked }) {
  return (
    <li key={id} className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="button-container">
        <button className="button card__button">삭제하기</button>
        <button
          className="button card__button"
          onClick={() => handleChecked(id)}
        >
          완료
        </button>
      </div>
    </li>
  );
}

export default Task;
