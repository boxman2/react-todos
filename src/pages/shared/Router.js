import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Aboutpage from "../Aboutpage";
import Homepage from "../Homepage";
import Notfound from "../Notfound";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Aboutpage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
