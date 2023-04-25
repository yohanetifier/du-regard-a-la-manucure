import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import test from "../../assets/images/amy-shamblen-xwM61TPMlYk-unsplash.jpg";
import About from "../About/About";
import Prestations from "../Prestations/Prestations";
import Success from "../Success/Success";
import { AnimatePresence } from "framer-motion";
import Footer from "../Footer/Footer";
import MentionsLegales from "../MentionsLegales/MentionsLegales";

function AnimatedRoutes() {
	const location = useLocation();
	const DNS = window.location.origin.split("//")[1];
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Service img={test} />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/prestations" element={<Prestations />} />
				<Route
					path="/mentions-legales"
					element={
						<MentionsLegales
							siteUrl={DNS}
							editor="Yohan Etifier"
							phoneNumber="07 63 74 04 71"
							mail="duregardalamanucure@gmail.com"
							host="vercel"
							headOffice="340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis"
						/>
					}
				/>
				{/* <Route path="/succes" element={<Success />} /> */}
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
