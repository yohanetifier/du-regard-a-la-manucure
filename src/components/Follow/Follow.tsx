import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Follow.module.scss';

function Follow() {
    return (
        <div className={styles.followwrapper}>
            <p className={styles.follow}>Suivez nous</p>
            <div className={styles.icon}>
                <a href="https://google.fr" target="_blank" rel="noreferrer" className={styles.link}>
                    {/* <FontAwesomeIcon fas={faFacebook} />  */}
                </a>
                <a href="https://www.tiktok.com/@duregardalamanucure" target="_blank" className={styles.link}>
                    {/* <FontAwesomeIcon icon={faTiktok} /> */}
                </a>
                <a href="https://www.instagram.com/du_regard_a_la_manucure/" target="_blank" className={styles.link}>
                    {/* <FontAwesomeIcon icon={faInstagram} /> */}
                </a>
            </div>
        </div>
    )
}

export default Follow; 