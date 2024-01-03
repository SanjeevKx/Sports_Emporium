// import logo from './logo.svg';
// import './App.css';
import Nav from './pages/Nav.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
// import Footer from './components/Footer.js'
import Register from './pages/Register.js'
import Sidebar from "./pages/Sidebar.js";
// import "./CSS/main.css"
// import Login from './components/Login.js'
import Footer from "./pages/Footer.js";
import {Route, Routes } from "react-router-dom"
import About from './pages/About.js';
import Admin from './pages/Admin.js';

import Usertable from './pages/Usertable.js';

// import Abouts from './pages/Abouts.js';

function App() {
  return (
    <>
  
     <Nav/>
      <Footer/>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/admin" element={<Admin />}/>
        {/* <Route path="/owner" element={<Owner/>}/> */}
        <Route path="/Usertable" element={<Usertable/>} />
    

      </Routes>

    </>
     
     
  );
}

export default App;
