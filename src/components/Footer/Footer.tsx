import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'; 

interface Link {
    label: string
    to: string
    className: string
}

const FooterLink: Link[] = [
    {
        label: "Contact", 
        to: "/contact",
        className: styles.contact
    },
    {
        label: "Conditions de vente", 
        to: "/conditions-de-vente",
        className: styles.conditionsdevente
    },
    {
        label: "Mentions legales", 
        to: "/mentions-legales", 
        className: styles.mentionslegales
    },
]

function Footer() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.firstwrapper}>
                <div className={styles.imgwrapper}>
                    <img src="" alt="" className={styles.img} />
                </div>
                <div className={styles.menu}>
                    <div className={styles.wrapperlink}>
                        {FooterLink.map(({label, to, className}) => (
                            <Link to={to} className={className} >{label}</Link>
                        ))}
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