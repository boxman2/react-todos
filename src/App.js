import "./App.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Router from "./pages/shared/Router";
import { Layout } from "./Style/style";

function App() {
  const { todos } = useSelector((state) => state.todos);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
