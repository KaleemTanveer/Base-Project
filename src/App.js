import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import PopularMovie from "./pages/PopularMovie";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { CssBaseline } from "@mui/material";
import NowPlayingMovie from "./pages/NowPlayingMovie";
import UpComingMovie from "./pages/UpComingMovie";
import TopRatedMovie from "./pages/TopRatedMovie";
function App() {
  return (
    <>
    <CssBaseline/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Dashboard/>}/>
          <Route path="/popular" element={<PopularMovie/>}/>
          <Route path="/nowplaying" element={<NowPlayingMovie/>}/>
          <Route path="/upcomming" element={<UpComingMovie/>}/>
          <Route path="/toprated" element={<TopRatedMovie/>}/>
        </Route>
       
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
