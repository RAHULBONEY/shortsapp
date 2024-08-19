import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import About from "./pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
