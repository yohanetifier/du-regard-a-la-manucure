import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css';
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";

function App() {

  return (
    <>
      <Header />
      <AnimatedRoutes />
    </>
  );
}

export default App;