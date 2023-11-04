import React from "react";
import Todolist from "Todolist";

function Layout() {
  return (
    <div className="layout">
      <div className="layout__header">
        {/* <>리액트 첫 과제</> */}
        <h1 className="header__title">To-do List</h1>
        {/* <p>송용승</p> */}
      </div>
      <Todolist />
    </div>
  );
}

export default Layout;
