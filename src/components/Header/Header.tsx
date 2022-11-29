import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/V1_Rose.svg'
import { useState } from 'react';
import { motion } from 'framer-motion';

export interface Navigation {
    label: string
    to: string
}

const navigation: Navigation[] = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Services',
        to: '/services'
    },
    {
        label: 'Contact',
        to: '/contact'
    },
    {
        label: 'Reservez',
        to: '/rendez-vous'
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

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="" className={styles.img} />
            </div>
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

                    <motion.li variants={item} className={styles.list}><Link to={'/'} className={styles.link} onClick={() => setMenu(false)}>ACCUEIL</Link></motion.li>
                    <motion.li variants={item} className={styles.list}><Link to={'/about'} className={styles.link} onClick={() => setMenu(false)}>A PROPOS</Link></motion.li>
                    <motion.li variants={item} className={styles.list}><Link to={'/prestations'} className={styles.link} onClick={() => setMenu(false)}>NOS PRESTATIONS</Link></motion.li>
                    <motion.li variants={item} className={styles.list}><Link to={'/services'} className={styles.link} onClick={() => setMenu(false)}>NOS SERVICES</Link> {/* <span>+</span> */}</motion.li>
                    <motion.li variants={item} className={styles.list}><Link to={'/succes'} className={styles.link} onClick={() => setMenu(false)}>NOS SUCCES</Link></motion.li>
                    <motion.li variants={item} className={styles.list}><Link to={'/rendez-vous'} className={styles.link} onClick={() => setMenu(false)}>RESERVATIONS</Link></motion.li>
                    <motion.li variants={item} className={styles.list}><Link to={'/contact'} className={styles.link} onClick={() => setMenu(false)}>CONTACT</Link></motion.li>
                    <motion.li variants={item} className={styles.list}><Link to={'/conditions-de-vente'} className={styles.link} onClick={() => setMenu(false)}>CONDITIONS DE VENTE</Link></motion.li>
                    <motion.li variants={item} className={styles.list}><Link to={'/mentions-legales'} className={styles.link} onClick={() => setMenu(false)}>MENTIONS LEGALES</Link></motion.li>


                </motion.ul>}
            </div>
        </div>
    )
}

export default Header
