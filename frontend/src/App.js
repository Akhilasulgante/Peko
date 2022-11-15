import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import Main from "./pages/Main";
import OrderNow from "./pages/OrderNow";
import Register from "./pages/Register";
export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/OrderNow" element={<OrderNow />} />
      </Routes>
    </div>
  );
}
