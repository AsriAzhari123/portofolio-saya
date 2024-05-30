import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}
