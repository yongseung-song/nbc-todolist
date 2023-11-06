import React, { useState } from "react";
import "App.css";
import TodoList from "TodoList";
import Footer from "Footer";

function Layout() {
  const [todoList, setTodoList] = useState([[], []]);
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
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <Footer todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Layout;
