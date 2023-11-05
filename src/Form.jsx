import React from "react";

function Form({ handleSubmitBtn }) {
  return (
    <form className="form" action="">
      <div className="input__wrapper">
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" name="title" id="title" autoFocus required />
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <input type="text" name="content" id="content" required />
        </div>
      </div>
      <button className="button form__button" onClick={handleSubmitBtn}>
        추가
      </button>
    </form>
  );
}

export default Form;
