import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";

import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import FullBlog from "./Components/FullBlog/FullBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<FullBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
