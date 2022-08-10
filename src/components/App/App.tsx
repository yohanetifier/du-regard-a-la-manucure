import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css';
import Home from '../Home/Home'
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
import test from '../../assets/images/amy-shamblen-xwM61TPMlYk-unsplash.jpg';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service img={test} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
