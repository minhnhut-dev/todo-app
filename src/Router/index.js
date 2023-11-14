import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} index />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
