import Banner from '../Banner/Banner';
import styles from './Home.module.scss';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import Concept from '../Concept/Concept';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Footer from '../Footer/Footer';

function Home() {

    return (
        <div className={styles.wrapper}>
            <Banner />
            <Concept />
            {/* <FirstSection /> */}
            <SecondSection />
            <Services />
            <Work />
            <Footer />
        </div>
    )
}

export default Home; 