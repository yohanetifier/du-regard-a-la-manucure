import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'; 
import Follow from '../Follow/Follow'
import {motion} from 'framer-motion'; 
import {useState} from 'react'; 

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
    const [wrapperAppear, setWrapperApper] = useState(false);

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
    onAnimationComplete={() => setWrapperApper(true)}
       >
             <div className={styles.firstwrapper}>
                <div className={styles.imgwrapper}>
                    <img src="" alt="" className={styles.img} />
                </div>
                <div className={styles.menu}>
                    {wrapperAppear && 
                    <motion.div 
                    className={styles.wrapperlink}
                    initial={{opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{
                        duration: 1
                    }}
                    >
                        {FooterLink.map(({label, to, className}) => (
                            <Link to={to} className={className} >{label}</Link>
                        ))}
                    </motion.div>}
                    <Follow 
                    wrapperAppear={wrapperAppear}
                    />
                </div>
            </div>
             {wrapperAppear && 
             <motion.div 
             className={styles.bottomwrapper}
             >
                <p>All Right Reserved 2022</p>
            </motion.div>}
        </motion.div>}
        </div>
    )
};

export default Footer; 