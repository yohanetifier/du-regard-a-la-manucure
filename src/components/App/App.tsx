import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css';
import Home from '../Home/Home'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" />
        <Route path="/contact" />
      </Routes>
    </>
  );
}

export default App;
