import Banner from '../Banner/Banner';
import styles from './Home.module.scss';
import SecondSection from '../SecondSection/SecondSection';
import Concept from '../Concept/Concept';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';
import imgBelowRight from '../../assets/images/apostolos-vamvouras-Mky1mc85XQQ-unsplash (1).jpg'
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img from '../../assets/images/henry-co-OpjlRo-31SI-unsplash.jpg';
import img2 from '../../assets/images/oliver-johnson-yH0dth2yEQE-unsplash.jpg';
import img3 from '../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg';
import img4 from '../../assets/images/majid-akbari--CE-5hQSoOQ-unsplash.jpg';
import { motion } from "framer-motion";
import { useState } from "react";
import { Img } from '../Concept/Concept';
import PageTransition from '../PageTransition/PageTransition';


function Home() {
    const workImage: Img[] =
        [
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

        ]

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
                        className={styles.imgbelowright}
                        classNamewrapper={styles.mainwrapper}
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
                        numberOfButton="one"
                    />
                    <SecondSection />
                    <Services />
                    <Work
                        title="Mes Succès"
                        img={workImage}
                    />
                </motion.div>
                <Footer />
            </PageTransition>
        </div>
    )
}

export default Home; 