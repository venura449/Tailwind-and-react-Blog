import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './pages/Login';
import About from './pages/About';
import Dashboard from './pages/Dashbord';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Signin from './pages/Signin';
import Signup from './pages/signup';
import Header from './components/Header';



export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element ={<About/>}/>
        <Route path="/Dashboard" element ={<Dashboard/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}
