import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css';
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";

export const BackgroundColor = createContext({
  isBackgroundColorIsPink: false,
  setIsBackgroundColorIsPink: (arg: boolean) => { }
});

export const SelectedService = createContext({
  selectedService: '',
  setSelectedService: (arg: string) => { }
});


function App() {
  const [isBackgroundColorIsPink, setIsBackgroundColorIsPink] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('');
  return (
    <>
      <BackgroundColor.Provider value={{ isBackgroundColorIsPink, setIsBackgroundColorIsPink }}>
        <SelectedService.Provider value={{ selectedService, setSelectedService }}>
          <Header />
          <AnimatedRoutes />
        </SelectedService.Provider>
      </BackgroundColor.Provider>
    </>
  );
}

export default App;