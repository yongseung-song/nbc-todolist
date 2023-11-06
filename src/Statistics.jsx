import React, { useEffect } from "react";

function Statistics() {
  let todos = 0;
  let working = 0;
  let done = 0;
  if (localStorage.getItem("todos") !== null) {
    todos = JSON.parse(localStorage.getItem("todos"));
    working = todos[0].length;
    done = todos[1].length;
  }

  return (
    <aside>
      <dl className="stats">
        <div>
          <dt>Working</dt>
          <dd>{working}</dd>
        </div>
        <div>
          <dt>Done</dt>
          <dd>{done}</dd>
        </div>
        <div>
          <dt>Total</dt>
          <dd>{working + done}</dd>
        </div>
      </dl>
    </aside>
  );
}

export default Statistics;
