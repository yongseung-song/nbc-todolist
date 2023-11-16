import React, { useState } from "react";
import TodoList from "TodoList";
import Footer from "Footer";

function Layout({ themeState, setThemeState }) {
  const [todoList, setTodoList] = useState([[], []]);
  const [message, setMessege] = useState("");

  // TODO themeState 정체 파악
  const ThemeButtonHandler = () => {};
  console.log(themeState);
  return (
    <div className="layout">
      <div className="layout__header">
        {/* <>리액트 첫 과제</> */}
        <h1 className="header__title">
          <span>►</span>
          {` users > yongseung > Desktop > dev > scc > React > To-do List`}
        </h1>
        <button>{themeState.name}</button>
        {/* <p>송용승</p> */}
      </div>
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        message={message}
        setMessage={setMessege}
      />
      <Footer todoList={todoList} setTodoList={setTodoList} message={message} />
    </div>
  );
}

export default Layout;
