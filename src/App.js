import "./App.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Router from "./pages/shared/Router";
function App() {
  const { todos } = useSelector((state) => state.todos);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="layout">
      <Router />
    </div>
  );
}

export default App;
