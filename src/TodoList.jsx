import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Task from "Task";
import Form from "Form";

function TodoList({ todoList, setTodoList }) {
  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      return;
    }
    const todos = JSON.parse(localStorage.getItem("todos"));
    setTodoList(todos);
  }, []);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
      const item = {
        id: Date.now(),
        date: dayjs().format("YY-MM-DD hh:mm"),
        title: title,
        content: content,
        isDone: false,
      };

      setTodoList((prevTodoList) => [
        [item, ...prevTodoList[0]],
        [...prevTodoList[1]],
      ]);
      localStorage.setItem(
        "todos",
        JSON.stringify([[item, ...todoList[0]], [...todoList[1]]])
      );
    } else return;
    titleInput.value = "";
    contentInput.value = "";
  };

  const onChangeHandler = (e, id) => {
    const allItemsList = [...todoList[0], ...todoList[1]];
    const target = e.currentTarget.getAttribute("id");
    if (target === "checkBtn") {
      const item = allItemsList.find((item) => item.id === id);
      item.isDone = !item.isDone;
    } else if (target === "deleteBtn") {
      const deleteIndex = allItemsList.findIndex((item) => item.id === id);
      allItemsList.splice(deleteIndex, 1);
    }
    filterTodoItems(allItemsList);
  };

  const filterTodoItems = (allItemsList) => {
    const workingItems = [];
    const doneItems = [];
    allItemsList.forEach((item) => {
      item.isDone ? doneItems.push(item) : workingItems.push(item);
    });

    setTodoList([[...workingItems], [...doneItems]]);

    localStorage.setItem(
      "todos",
      JSON.stringify([[...workingItems], [...doneItems]])
    );
  };

  return (
    <>
      <Form handleSubmitBtn={handleSubmitBtn} />
      <div id="todoList">
        <section className=" working">
          <h3 className="card-container__title"> WORKING...</h3>
          <ul className="card-container">
            <div className="card-carousel">
              {todoList[0].map((item) => (
                <Task
                  key={item?.id}
                  id={item?.id}
                  date={item?.date}
                  // TODO 날짜 제대로 안나오는 이유 확인
                  title={item?.title}
                  content={item?.content}
                  buttonText={`완료`}
                  onChangeHandler={onChangeHandler}
                />
              ))}
            </div>
          </ul>
        </section>
        <section className=" done">
          <h3 className="card-container__title"> DONE!</h3>
          <ul className="card-container">
            <div className="card-carousel">
              {todoList[1].map((item) => (
                <Task
                  key={item?.id}
                  id={item?.id}
                  date={`Done on ${dayjs().format("YY-MM-DD hh:mm")}`} // 완료 시각
                  title={item?.title}
                  content={item?.content}
                  buttonText={`취소`}
                  onChangeHandler={onChangeHandler}
                />
              ))}
            </div>
          </ul>
        </section>
      </div>
    </>
  );
}

export default TodoList;
