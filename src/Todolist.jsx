import React, { useState, useEffect } from "react";
import Task from "Task";
import Form from "Form";

function Todolist() {
  const [todoItem, setTodoItem] = useState({});
  const [todoList, setTodoList] = useState([]);
  // const [title, setTitle] = useState("");
  // const [completedList, setCompletedList] = useState([]);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const titleInput = document.querySelector("#title");
    const contentInput = document.querySelector("#content");
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
      const item = {
        id: Date.now(),
        title: title,
        content: content,
        isDone: false,
      };
      setTodoItem(item);

      // setTodoList([todoItem, ...todoList]);
      setTodoList((prevTodoList) => [item, ...prevTodoList]);
    }

    console.log(todoList);
  };

  const handleChecked = (id) => {
    const item = todoList.find((card) => card.id === id);
    item.isDone = !item.isDone;
    // setCompletedList([
    //   ...completedList,
    //   ...todoList.filter((card) => card.isDone),
    // ]);

    //가져온녀석의 isDone 정보를 바꾸고
    //바꾼 정보를 바탕으로  다시 카드리스트 필터를 돌려서 안된놈만 냅두고 된놈은 빼버린다
    // console.log(todoList);
    // if(filtered.isDone) {

    // }
    // setCompletedList([filtered, ...completedList]);
    // console.log(filtered);
  };

  return (
    <>
      <Form handleSubmitBtn={handleSubmitBtn} />

      <section className=" working">
        <h3 className="card-container__title">WORKING...</h3>
        <ul className="card-container">
          <div className="card-carousel">
            {todoList.map((item) => (
              <Task
                key={item?.id}
                id={item?.id}
                title={item?.title}
                content={item?.content}
                handleChecked={handleChecked}
              />
            ))}
          </div>
        </ul>
      </section>

      <section className=" done">
        <h3 className="card-container__title">DONE!</h3>
        <ul className="card-container">
          <div className="card-carousel"></div>
        </ul>
      </section>
    </>
  );
}

export default Todolist;
