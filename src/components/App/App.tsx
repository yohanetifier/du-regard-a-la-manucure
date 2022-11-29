import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css';
import Home from '../Home/Home'
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
import test from '../../assets/images/amy-shamblen-xwM61TPMlYk-unsplash.jpg';
import About from '../About/About';
import Prestations from '../Prestations/Prestations';
import Success from '../Success/Success';
import Footer from '../Footer/Footer';
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";

function App() {
  const AnimationDone = createContext(false);
  const [lastAnimationIsOver, setLastAnimationIsOver] = useState(false);

  return (
    <>
      <Header />
      <AnimatedRoutes setLastAnimationIsOver={setLastAnimationIsOver} />
      <AnimationDone.Provider
        value={lastAnimationIsOver}>
        <Footer
          animation={lastAnimationIsOver}
        />
      </AnimationDone.Provider>
    </>
  );
}

export default App;