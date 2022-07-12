import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.firstwrapper}>
                <div className={styles.imgwrapper}>
                    <img src="" alt="" className={styles.img} />
                </div>
                <div className={styles.menu}>
                    <div>
                        <p className={styles.contact}>Contact</p>
                        <p className={styles.conditionsdevente}>Conditions de vente</p>
                        <p className={styles.mentionslegales}>Mentions legales</p>
                    </div>
                    <div>
                        <p className={styles.follow}>Suivez nous</p>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faFacebook} />   
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottomwrapper}>
                <p>All Right Reserved 2022</p>
            </div>
        </div>
    )
};

export default Footer; 