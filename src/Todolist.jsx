import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Task from "Task";
import Form from "Form";

function TodoList() {
  const [todoList, setTodoList] = useState([[], []]);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
      const item = {
        id: Date.now(),
        date: dayjs(),
        title: title,
        content: content,
        isDone: false,
      };

      setTodoList((prevTodoList) => [
        [item, ...prevTodoList[0]],
        [...prevTodoList[1]],
      ]);
    }
    titleInput.value = "";
    contentInput.value = "";
    console.log(todoList);
  };

  const handleChecked = (id) => {
    const allItemsList = [...todoList[0], ...todoList[1]];
    const item = allItemsList.find((item) => item.id === id);

    item.isDone = !item.isDone;
    filterTodoItems(allItemsList);
  };

  const filterTodoItems = (allItemsList) => {
    const workingItems = [];
    const doneItems = [];
    allItemsList.forEach((item) => {
      item.isDone ? doneItems.push(item) : workingItems.push(item);
    });

    setTodoList([[...workingItems], [...doneItems]]);
    console.log(todoList);
  };

  const handleDelete = (id) => {
    const allItemsList = [...todoList[0], ...todoList[1]];
    const deleteIndex = allItemsList.findIndex((item) => item.id === id);

    allItemsList.splice(deleteIndex, 1);
    filterTodoItems(allItemsList);
  };

  return (
    <>
      <Form handleSubmitBtn={handleSubmitBtn} />

      <section className=" working">
        <h3 className="card-container__title">WORKING...</h3>
        <ul className="card-container">
          <div className="card-carousel">
            {todoList[0].map((item) => (
              <Task
                key={item?.id}
                id={item?.id}
                date={dayjs().format("DD/MM/YY HH:MM")}
                title={item?.title}
                content={item?.content}
                buttonText={`완료`}
                handleChecked={handleChecked}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </ul>
      </section>

      <section className=" done">
        <h3 className="card-container__title">DONE!</h3>
        <ul className="card-container">
          <div className="card-carousel">
            {todoList[1].map((item) => (
              <Task
                key={item?.id}
                id={item?.id}
                date={dayjs().format("DD/MM/YY HH:")} // 완료 시각
                title={item?.title}
                content={item?.content}
                buttonText={`취소`}
                handleChecked={handleChecked}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </ul>
      </section>
    </>
  );
}

export default TodoList;
