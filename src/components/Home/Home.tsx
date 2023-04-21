import Banner from "../Banner/Banner";
import styles from "./Home.module.scss";
import SecondSection from "../SecondSection/SecondSection";
import Concept from "../Concept/Concept";
import Services from "../Services/Services";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import imgBelowRight from "../../assets/images/apostolos-vamvouras-Mky1mc85XQQ-unsplash-_1_.webp";
import img1 from "../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.webp";
import img from "../../assets/images/IMG_7758-2.webp";
import img2 from "../../assets/images/IMG_7391.webp";
import img3 from "../../assets/images/IMG_7530-3.webp";
import img4 from "../../assets/images/IMG_7077-2 (1).webp";
import { motion } from "framer-motion";
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
						linkButton="https://fleeky.fr/duregardalamanucure"
						labelButton="Reservez"
					/>
					<Concept
						src={img1}
						alt={img1}
						title="Notre Concept"
						children="Que diriez-vous de sublimer vos ongles et votre regard sans sortir de chez vous? C'est possible avec Du Regard à La Manucure,
                		professionnelle de l'esthétique, prothésiste ongulaire. L'institut Du Regard à la Manucure basé à Aincourt se déplace dans le Val d'Oise et les
						 Yvelines pour vous mettre en beauté."
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
