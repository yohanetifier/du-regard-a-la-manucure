import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css';
import Home from '../Home/Home'
import Contact from '../Contact/Contact';



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
