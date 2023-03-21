// import styles from './About.module.scss';
import Concept from "../Concept/Concept";
import img from "../../assets/images/PHOTO-2022-12-31-12-21-07.jpg";
import img1 from "../../assets/images/PHOTO-2022-12-31-12-41-05.jpg";
import img2 from "../../assets/images/PHOTO-2022-12-31-12-39-16.jpg";
import img0 from "../../assets/images/AttesTaTion-MaNuCuRe-RuSse.jpg";
import img3 from "../../assets/images/PHOTO-2022-12-31-12-41-28.jpg";
import img4 from "../../assets/images/PHOTO-2022-12-31-12-34-35.jpg";
import img5 from "../../assets/images/PHOTO-2022-12-31-12-47-08.webp";
import img6 from "../../assets/images/PHOTO-2022-12-31-12-29-08.webp";
import img7 from "../../assets/images/AttesTaTion-ProTheSisTe-OnGuLaiRe.jpg";
import img8 from "../../assets/images/Certificat-de-participation.jpg";
import img9 from "../../assets/images/certifcat4.jpg";
import Concept2 from "./Concept2/Concept2";
import Concept3 from "./Concept3/Concept3";
import Certificate from "./Certficate/Certificate";
import { motion } from "framer-motion";
import PageTransition from "../PageTransition/PageTransition";
import Footer from "../Footer/Footer";

export default function About() {
	const imgConcept2 = [
		{
			src: img1,
			alt: img1,
			className: "firstimg",
		},
		{
			src: img2,
			alt: img2,
			className: "secondimg",
		},
		{
			src: img3,
			alt: img3,
			className: "thirdimg",
		},
	];

	const imgConcept3 = [
		{
			src: img4,
			alt: img4,
			className: "firstimg",
		},
		{
			src: img5,
			alt: img5,
			className: "secondimg",
		},
		{
			src: img6,
			alt: img6,
			className: "thirdimg",
		},
	];

	const certificate = [
		{
			src: img0,
			alt: img0,
			// className: "firstimg",
		},
		{
			src: img7,
			alt: img7,
			// className: "secondimg",
		},
		{
			src: img8,
			alt: img8,
			// className: "thirdimg",
		},
		{
			src: img9,
			alt: img9,
			// className: "fourthimg",
		},
	];

	return (
		<PageTransition>
			<Concept
				src={img}
				alt={img}
				title="Parlons un peu de nous"
				children="Du regard à la manucure met tout son savoir faire à votre disposition pour vous offrir un regard de star.
      De l'épilation des sourcils, au browlift, en passant par la teinture et le rehaussement de vos cils pour une véritable expérience sur mesure."
				to="/prestations"
				label="Nos prestations"
			/>
			<Concept2
				assets={imgConcept2}
				title="Du Regard à la Manucure"
				description="Parce que vos mains et vos pieds ont besoin d'être chouchouté comme ils le méritent. Du regard à la Manucure propose aussi des soins complets à domicile."
			/>
			<Concept3
				assets={imgConcept3}
				description="Grace à son activité à domicile, Du regard à la Manucure, peut bichonner également vos pieds en les sublimant d'un beau vernis semi-permanent ou classique 
        et en leur appliquant un soin pour un véritable instant cocooning."
			/>
			<Certificate title="Mes Certificats" assets={certificate} />
			<Footer />
		</PageTransition>
	);
}
