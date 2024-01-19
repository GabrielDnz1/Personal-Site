import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
