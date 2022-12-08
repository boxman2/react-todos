import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { completeTodo, removeTodo } from "../redux/modules/todos";
//style 컴포넌트로 바꾸기
//링크 네비게이트 차이 점 알기
const Done = ({ user, state }) => {
  const dispatch = useDispatch();
  let { isDone, title, body, id } = user;
  const deleteDone = (num) => {
    dispatch(removeTodo(num));
  };
  const completeDone = (num) => {
    dispatch(completeTodo(num));
  };
  return (
    <div className={isDone ? "box red" : "box"}>
      <Link className="link" to={`/${id}`}>
        상세보기{" "}
      </Link>
      <h2>{title}</h2>
      <div>{body}</div>
      <div className="buttons">
        <button
          className="delete-button"
          onClick={() => {
            deleteDone(id);
          }}
        >
          삭제하기
        </button>
        <button
          className="success-button"
          onClick={() => {
            completeDone(id);
          }}
        >
          {state}
        </button>
      </div>
    </div>
  );
};
export default Done;
