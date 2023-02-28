import './App.css';

import { CssBaseline } from "@mui/material";
import NavBar from './components/NavBar';
import SideBar from './components/Sidebar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { HomeBody } from './components/HomeBody';
function App() {
  return (
    <>
    
      <CssBaseline/>
      <NavBar/>
      <Home/>
      <HomeBody/>
      <Footer/>
      
      
    </>
  );
}

export default App;
