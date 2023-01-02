import Banner from '../Banner/Banner';
import styles from './Home.module.scss';
import SecondSection from '../SecondSection/SecondSection';
import Concept from '../Concept/Concept';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';
import imgBelowRight from '../../assets/images/apostolos-vamvouras-Mky1mc85XQQ-unsplash (1).jpg'
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import { motion } from "framer-motion";
import { useState } from "react";

export interface Props {
    animationDone(arg: boolean): void
}

function Home({animationDone}: Props) {
    const [ isLoading, setIsLoading ] = useState(false); 

    return (
        <div>
       { !isLoading && 
        <motion.div 
        className={styles.wrapper}
        initial={{opacity: 0,}}
        animate={{opacity: 1 }}
        transition={{duration: 3}}
        onAnimationComplete={() => setIsLoading(true)}
        
        >
            <p>Du regard à la Manucure</p> 
             </motion.div>}
        
        
       { isLoading && 
       <motion.div 
            className={styles.wrapperTest}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 2} }}
            exit={{opacity: 0,  transition: {duration: 1}} }
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
            <Work animationDone={animationDone}/> 
             </motion.div>     }
        </div>
    )
}

export default Home; 