import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Task from "Task";
import Form from "Form";

function TodoList({ todoList, setTodoList, message, setMessage }) {
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
    setMessage(
      `🔥 'WORKING...' 그룹에 '${titleInput.value}'가 추가되었습니다.`
    );
    titleInput.value = "";
    contentInput.value = "";
  };

  const onChangeHandler = (e, id) => {
    const allItemsList = [...todoList[0], ...todoList[1]];
    const target = e.currentTarget.getAttribute("id");
    let group = "";
    if (target === "checkBtn") {
      const itemIndex = allItemsList.findIndex((item) => item.id === id);
      const item = allItemsList[itemIndex];
      if (itemIndex < todoList[0].length) {
        setMessage(
          `✅ 'WORKING...' 그룹의 '${item.title}' 항목이 완료되었습니다.`
        );
      } else {
        setMessage(
          `🔙 'DONE!' 그룹의 '${item.title}' 항목의 완료 처리가 취소되었습니다.`
        );
      }
      item.isDone = !item.isDone;
    } else if (target === "deleteBtn") {
      const deleteIndex = allItemsList.findIndex((item) => item.id === id);
      const deleteItem = allItemsList[deleteIndex];
      if (deleteIndex < todoList[0].length) {
        setMessage(
          `🗑️ 'WORKING...' 그룹의 '${deleteItem.title}' 항목이 삭제되었습니다.`
        );
      } else {
        setMessage(
          `🗑️ 'DONE!' 그룹의 '${deleteItem.title}' 항목이 삭제되었습니다.`
        );
      }
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
