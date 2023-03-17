import Banner from "../Banner/Banner";
import styles from "./Home.module.scss";
import SecondSection from "../SecondSection/SecondSection";
import Concept from "../Concept/Concept";
import Services from "../Services/Services";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import imgBelowRight from "../../assets/images/apostolos-vamvouras-Mky1mc85XQQ-unsplash-_1_.webp";
import img1 from "../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.webp";
import img from "../../assets/images/henry-co-OpjlRo-31SI-unsplash.jpg";
import img2 from "../../assets/images/oliver-johnson-yH0dth2yEQE-unsplash.jpg";
import img3 from "../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg";
import img4 from "../../assets/images/majid-akbari--CE-5hQSoOQ-unsplash.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { Img } from "../Concept/Concept";
import PageTransition from "../PageTransition/PageTransition";
import imgSecondSection1 from "../../assets/images/sara-dabaghian-wZx6BeqZNUk-unsplash.webp";
import imgSecondSection2 from "../../assets/images/hadis-safari-A7rkoSFjrG0-unsplash.webp";

function Home() {
	const workImage: Img[] = [
		{
			src: img,
			alt: img,
		},
		{
			src: img2,
			alt: img2,
		},
		{
			src: img3,
			alt: img3,
		},
		{
			src: img4,
			alt: img4,
		},
	];

	const quote = [
		{
			sentence: "La beauté",
		},
		{
			sentence: "est",
		},
		{
			sentence: "dans les yeux",
		},
		{
			sentence: "de celui qui regarde",
		},
		{
			sentence: "Oscar Wilde",
		},
	];

	return (
		<div>
			<PageTransition>
				<motion.div
					className={styles.wrapperTest}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 2 } }}
					exit={{ opacity: 0, transition: { duration: 1 } }}
				>
					<Banner
						src={imgBelowRight}
						title="Plus qu'une parenthèse bien être... une mise en beauté unique"
						hasButton={true}
						linkButton="https://www.planity.com/du-regard-a-la-manucure-deplacement-a-domicile-95510-aincourt"
						labelButton="Reservez"
					/>
					<Concept
						src={img1}
						alt={img1}
						title="Notre Concept"
						children="Que diriez-vous de sublimer vos ongles et votre regard sans sortir de chez vous? C'est possible avec Du Regard à La Manucure,
                professionnelle de l'esthétique, prothésiste ongulaire. L'institut Du Regard à la Manucure est basé à Aincourt, dans le Val d'Oise et se
                déplace dans toute l'Ile de France pour vous mettre en beauté."
						to="/about"
						label="En savoir plus"
						// numberOfButton="one"
					/>
					<SecondSection
						img1={imgSecondSection1}
						alt1={imgSecondSection1}
						img2={imgSecondSection2}
						alt2={imgSecondSection2}
						quote={quote}
					/>
					<Services />
					<Work title="Nos Succès" img={workImage} />
				</motion.div>
				<Footer />
			</PageTransition>
		</div>
	);
}

export default Home;
