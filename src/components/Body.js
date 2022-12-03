import { useSelector } from "react-redux";
import Done from "../components/Done";

const Body = () => {
  const todoList = useSelector((state) => state.todos.todos);
  //reducer 리턴시키기 <<<<==== 이거추가하겠습니다
  //오늘처리하겠습니다 ㅠㅠㅠㅍㅠㅠㅠㅠㅠ
  //컨텍스트 써서 투두리스트 부분 내리기
  //리덕스가 왜 리코일보다 안좋은지  ;;;

  return (
    <section className="todo-list">
      <h2>NOT DONE</h2>
      <div className="not-done">
        {todoList.map((a) => {
          let { isDone, id } = a;
          return (
            !isDone && <Done state={"완료"} user={a} key={`title-${id}`} />
          );
        })}
      </div>
      <h2>DONE</h2>
      <div className="done">
        {todoList.map((a) => {
          let { isDone, id } = a;
          return isDone && <Done state={"취소"} user={a} key={`title-${id}`} />;
        })}
      </div>
    </section>
  );
};

export default Body;
