import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const { todos } = useSelector((state) => state.todos);

  const { id } = useParams();
  const navigate = useNavigate();
  const goHomePage = () => {
    navigate("/");
  };
  const [{ title, body }] = todos.filter((item) => item.id === id);
  //14번줄 리듀스로옮기기
  // 데이터가없으면 홈으로 돌아가라 + 404

  return (
    <div className="detail-box">
      <div className="space-between">
        <div>ID : {id}</div>
        <button onClick={goHomePage}>이전 으로</button>
      </div>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  );
};

export default Aboutpage;
