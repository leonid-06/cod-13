import React from "react";
import Login from "./Login";
import Tables from "./Tables";
import Admin from "./Admin";

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/info" element={<Tables />} />
        <Route path="*" element={<Admin />} />
      </Routes>

    </>

  )
}
export default App;
