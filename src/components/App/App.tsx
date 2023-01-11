import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css';
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";

export const BackgroundColor = createContext({
  isBackgroundColorIsPink: false,
  setIsBackgroundColorIsPink: (arg: boolean) => { }
});

function App() {
  const [isBackgroundColorIsPink, setIsBackgroundColorIsPink] = useState<boolean>(false);
  return (
    <>
      <BackgroundColor.Provider value={{ isBackgroundColorIsPink, setIsBackgroundColorIsPink }}>
        <Header />
        <AnimatedRoutes />
      </BackgroundColor.Provider>
    </>
  );
}

export default App;