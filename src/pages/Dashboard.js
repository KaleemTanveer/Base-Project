import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/NavBar";
import Home from "../components/Home";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";

export const Dashboard = () => {
  return (
    <>
      <CssBaseline />
      
      <Home />
      <HomeBody />
      
    </>
  );
};
