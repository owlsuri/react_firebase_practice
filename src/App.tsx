import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./component/page/Test";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
