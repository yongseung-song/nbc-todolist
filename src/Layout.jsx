import React from "react";
import TodoList from "TodoList";

function Layout() {
  return (
    <div className="layout">
      <div className="layout__header">
        {/* <>리액트 첫 과제</> */}
        <h1 className="header__title">
          <span>►</span>
          {` users > yongseung > Desktop > dev > scc > React > To-do List`}
        </h1>
        {/* <p>송용승</p> */}
      </div>
      <TodoList />
    </div>
  );
}

export default Layout;
