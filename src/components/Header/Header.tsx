import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/V1_Rose.svg';
// import logo from '../../assets/images/logo/du_regard_a_la_manucure.svg'
import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Image from '../Image/Image';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import { BackgroundColor } from '../App/App';

export interface Navigation {
    label: string
    to: string
}

const navigation: Navigation[] = [
    {
        label: 'ACCUEIL',
        to: '/'
    },
    {
        label: 'A PROPOS',
        to: '/about'
    },
    {
        label: 'NOS PRESTATIONS',
        to: '/prestations'
    },
    {
        label: 'NOS SERVICES',
        to: '/services'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    },
    {
        label: 'MENTIONS LEGALES',
        to: '/mentions-legales'
    },

]

const container = {
    show: {
        transition: {
            staggerChildren: 0.2
        }
    }

}

const item = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    }
}

const Header = () => {
    const [menu, setMenu] = useState(false);
    const { isBackgroundColorIsPink } = useContext(BackgroundColor);

    const changeColor = {
        purple: {
            filter: 'invert(7%) sepia(85%) saturate(6792%) hue-rotate(334deg) brightness(103%) contrast(89%)',
            transition: 'filter 200ms'
        },
        black: {
            fill: 'black',
            transition: 'fill 200ms'
        }
    }

    const { purple } = changeColor;
    const { black } = changeColor;

    return (
        <div className={styles.header}>
            <Link className={styles.logo} to='/'>
                <img src={logo} alt="" className={styles.img} style={!menu ? purple : black} />
            </Link>
            <div className={styles.menu}>
                <div className={styles.menulayout} onClick={() => !menu ? setMenu(true) : setMenu(false)}>
                    <span className={!menu ? styles.firstline : `${styles.firstline} ${styles.movefirstline}`}></span>
                    <span className={!menu ? styles.secondline : `${styles.secondline} ${styles.movesecondline}`}></span>
                    <span className={!menu ? styles.thirdline : `${styles.thirdline} ${styles.movethirdline}`}></span>
                </div>
            </div>
            <div className={menu ? `${styles.inactifmenu} ${styles.actifmenu}` : `${styles.inactifmenu}`}>
                {menu && <motion.ul
                    className={styles.wrapperlist}
                    variants={container}
                    initial='hidden'
                    animate='show'
                >
                    {navigation.map(({ label, to }) => (
                        <motion.li variants={item} className={styles.list}><Link to={to} className={styles.link} onClick={() => setMenu(false)}>{label}</Link></motion.li>
                    ))}
                </motion.ul>}
            </div>
            <SocialNetwork
                className={styles.socialNetwork}
                menu={menu}
            />
        </div>
    )
}

export default Header;

