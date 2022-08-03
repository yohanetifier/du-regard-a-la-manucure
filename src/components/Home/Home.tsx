import Banner from '../Banner/Banner';
import styles from './Home.module.scss';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import Concept from '../Concept/Concept';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';
import imgBelowRight from '../../assets/images/apostolos-vamvouras-Mky1mc85XQQ-unsplash (1).jpg'


function Home() {

    return (
        <div className={styles.wrapper}>
            <Banner src={imgBelowRight} className={styles.imgbelowright} classNamewrapper={styles.mainwrapper} />
            <Concept />
            <SecondSection />
            <Services />
            <Work />
            <Footer />
        </div>
    )
}

export default Home; 