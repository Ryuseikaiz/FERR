// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import Trending from "./components/trending/Trending";
import Upcoming from "./components/upcoming/Upcoming";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upcoming />} />
      </Routes>
    </Router>
  );
}

export default App;
