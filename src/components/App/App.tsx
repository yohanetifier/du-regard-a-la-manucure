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

export const Loader = createContext({
  isLoading: false,
  setIsLoading: (arg: boolean) => { }
});

function App() {
  const [isBackgroundColorIsPink, setIsBackgroundColorIsPink] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Loader.Provider value={{ isLoading, setIsLoading }}>
        <BackgroundColor.Provider value={{ isBackgroundColorIsPink, setIsBackgroundColorIsPink }}>
          <SelectedService.Provider value={{ selectedService, setSelectedService }}>
            <Header />
            <AnimatedRoutes />
          </SelectedService.Provider>
        </BackgroundColor.Provider>
      </Loader.Provider>
    </>
  );
}

export default App;