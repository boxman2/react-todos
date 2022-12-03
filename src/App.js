import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  });

  return (
    <div className="layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}

export default App;
