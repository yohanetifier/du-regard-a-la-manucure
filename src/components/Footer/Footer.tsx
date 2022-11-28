import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'; 
import Follow from '../Follow/Follow'
import {motion} from 'framer-motion'; 

interface Link {
    label: string
    to: string
    className: string
}

interface Props {
    animation: boolean
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

function Footer({animation}: Props) {
    // const wrapperAppear, setWrapperApper
    return (
        <div className={styles.layoutwrapper}>
       {animation && 
       <motion.div 
       className={styles.mainwrapper}
       initial={{
        scaleY: 0, 
        transformOrigin: `bottom`
    }}
       animate={{
        scaleY: 1, 
        transformOrigin: `bottom`,
    }}
    transition={{
        duration: 1
    }}
       >
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
                    <Follow />
                </div>
            </div>
             <div className={styles.bottomwrapper}>
                <p>All Right Reserved 2022</p>
            </div>
        </motion.div>}
        </div>
    )
};

export default Footer; 