import Banner from '../Banner/Banner';
import styles from './Home.module.scss';
import FirstSection from '../FirstSection/FirstSection';
import Concept from '../Concept/Concept';

function Home() {
    
    return (
        <div className={styles.wrapper}>
            <Banner />
            <FirstSection />
            <Concept />
        </div>
    )
}

export default Home; 