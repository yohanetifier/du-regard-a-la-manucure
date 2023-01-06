import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialNetwork.module.scss';

interface Props {
    className?: string
}

function SocialNetwork({ className }: Props) {
    return (
        <div className={`${className} ${styles.wrapper}`}>
            <a href="https://google.fr" target="_blank" rel="noreferrer" className={styles.link}>
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.tiktok.com/@duregardalamanucure" target="_blank" className={styles.link}>
                <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.instagram.com/du_regard_a_la_manucure/" target="_blank" className={styles.link}>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    )
}

export default SocialNetwork