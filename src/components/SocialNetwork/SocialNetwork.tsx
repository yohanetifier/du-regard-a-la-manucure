import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialNetwork.module.scss';

interface Props {
    className?: string
    menu?: boolean
}

function SocialNetwork({ className, menu}: Props) {
    return (
        <div className={`${className} ${styles.wrapper}` }>
            <a href="https://google.fr" target="_blank" rel="noreferrer" className={styles.link}>
                <FontAwesomeIcon icon={faFacebook} className={!menu ? styles.purpleColor : styles.blackColor} />
            </a>
            <a href="https://www.tiktok.com/@duregardalamanucure" target="_blank" className={styles.link}>
                <FontAwesomeIcon icon={faTiktok} className={!menu ? styles.purpleColor : styles.blackColor} />
            </a>
            <a href="https://www.instagram.com/du_regard_a_la_manucure/" target="_blank" className={styles.link}>
                <FontAwesomeIcon icon={faInstagram} className={!menu ? styles.purpleColor : styles.blackColor} />
            </a>
        </div>
    )
}

export default SocialNetwork;