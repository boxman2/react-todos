import { useSelector } from "react-redux";
import Form from "./Form";
//const !!!!
const Body = () => {
  const todoList = useSelector((state) => state.todos.todos);

  return (
    <section className="todo-list">
      <h2>NOT DONE</h2>
      <div className="not-done">
        {todoList.map((a) => {
          const { isDone, id } = a;
          return (
            !isDone && <Form state={"완료"} user={a} key={`title-${id}`} />
          );
        })}
      </div>
      <h2>DONE</h2>
      <div className="done">
        {todoList.map((a) => {
          const { isDone, id } = a;
          return isDone && <Form state={"취소"} user={a} key={`title-${id}`} />;
        })}
      </div>
    </section>
  );
};

export default Body;
