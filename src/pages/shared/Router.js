import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutpage from "../Aboutpage";
import Homepage from "../Homepage";
import Notfound from "../Notfound";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Aboutpage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
