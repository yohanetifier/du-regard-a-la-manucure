import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
import test from '../../assets/images/amy-shamblen-xwM61TPMlYk-unsplash.jpg';
import About from '../About/About';
import Prestations from '../Prestations/Prestations';
import Success from '../Success/Success';

interface Props {
    setLastAnimationIsOver(arg: boolean): void
}

function AnimatedRoutes({ setLastAnimationIsOver }: Props) {
    return (
        <Routes>
            <Route path="/" element={<Home animationDone={setLastAnimationIsOver} />} />
            <Route path="/services" element={<Service img={test} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/succes" element={<Success />} />
        </Routes>
    )
}

export default AnimatedRoutes

