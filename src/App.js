import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Notfound from "./page/Notfound";

function App() {
  const { todos } = useSelector((state) => state.todos);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Aboutpage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

new Promise(() => {});
export default App;
