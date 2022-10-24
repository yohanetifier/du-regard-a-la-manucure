import styles from './Work.module.scss';
import img1 from '../../assets/images/henry-co-OpjlRo-31SI-unsplash.jpg';
import img2 from '../../assets/images/oliver-johnson-yH0dth2yEQE-unsplash.jpg';
import img3 from '../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg';
import img4 from '../../assets/images/majid-akbari--CE-5hQSoOQ-unsplash.jpg';
import img5 from "../../assets/images/majid-akbari--CE-5hQSoOQ-unsplash.jpg";
import Title from "../Title/Title";
import { Link } from 'react-router-dom';


function Work() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrappertitle}>
                <h2 className={styles.title}>Mes succès</h2>
            </div>
            <div className={styles.mainwrapper}>
                <div className={styles.wrapperimg}>
                    <img src={img1} className={styles.img} />
                </div>
                <div className={styles.wrapperimg}>
                    <img src={img2} className={styles.img} />
                </div>
                <div className={styles.wrapperimg}>
                    <img src={img3} className={styles.img} />
                </div>
                <div className={styles.wrapperimg}>
                    <img src={img4} className={styles.img} />
                </div>

            </div>
            <div className={styles.wrapperlink}>
                <Link to="/succes" className={styles.link}>Voir plus de succès</Link>
            </div>
        </div>
    )
};

export default Work;

