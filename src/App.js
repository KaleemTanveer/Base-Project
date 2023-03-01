import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import PopularMovies from "./pages/PopularMovies";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeBody from "./components/HomeBody";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Popular" element={<PopularMovies />}></Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
