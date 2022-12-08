import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { InputAreas, InputDetail } from "../Style/style";

const InputArea = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ title: "", body: "" });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const add = (e) => {
    e.preventDefault();
    const { title, body } = input;
    if (title === "" || body === "") return;
    dispatch(
      addTodo({
        id: Math.random().toString(36).substr(2, 16),
        title,
        body,
        isDone: false,
      })
    );
    setInput({ title: "", body: "" });
  };
  return (
    <InputAreas onSubmit={add}>
      <div className="input-detail">
        <div>제목</div>
        <input
          type="text"
          className="title-input"
          onChange={handleInput}
          value={input.title}
          name="title"
        ></input>
        <div>내용</div>
        <input
          type="text"
          className="body-input"
          onChange={handleInput}
          value={input.body}
          name="body"
        ></input>
      </div>
      <button className="add-button">추가하기</button>{" "}
    </InputAreas>
  );
};

export default InputArea;
