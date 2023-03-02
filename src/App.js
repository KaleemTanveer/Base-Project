import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import PopularMovies from "./pages/PopularMovies";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeBody from "./components/HomeBody";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <>
    <CssBaseline/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomeBody />}/>
          <Route path="/popular" element={<PopularMovies/>}/>
          <Route path="/nowplaying" element={<div>nowPlay</div>}/>
          <Route path="/upcomming" element={<div>upcomming</div>}/>
          <Route path="/toprated" element={<div>toprated</div>}/>
        </Route>
       
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
