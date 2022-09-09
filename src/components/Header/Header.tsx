import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/V1_Rose.svg'
import { useState } from 'react';

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

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="" className={styles.img} />
            </div>
            {/* <ul className={styles.menu}>
                {navigation.map(({ label, to }, i) => (
                    <Link to={to} className={styles.link} key={i}>{label}</Link>
                ))}
            </ul> */}
            <div className={styles.menu}>
                <div className={styles.menulayout} onClick={() => !menu ? setMenu(true) : setMenu(false)}>
                    <span className={!menu ? styles.firstline : `${styles.firstline} ${styles.movefirstline}`}></span>
                    <span className={!menu ? styles.secondline : `${styles.secondline} ${styles.movesecondline}`}></span>
                    <span className={!menu ? styles.thirdline : `${styles.thirdline} ${styles.movethirdline}`}></span>
                </div>
            </div>
            <div className={menu ? `${styles.inactifmenu} ${styles.actifmenu}` : `${styles.inactifmenu}`}>
                {/* <div className={styles.wrapperlink}> */}
                <ul className={styles.wrapperlist}>
                    <li className={styles.list}><Link to={'/'} className={styles.link} onClick={() => setMenu(false)}>ACCUEIL</Link></li>
                    <li className={styles.list}><Link to={'/about'} className={styles.link} onClick={() => setMenu(false)}>A PROPOS</Link></li>
                    <li className={styles.list}><Link to={'/prestations'} className={styles.link} onClick={() => setMenu(false)}>NOS PRESTATIONS</Link></li>
                    <li className={styles.list}><Link to={'/services'} className={styles.link} onClick={() => setMenu(false)}>NOS SERVICES</Link> {/* <span>+</span> */}</li>
                    <li className={styles.list}><Link to={'/succès'} className={styles.link} onClick={() => setMenu(false)}>NOS SUCCES</Link></li>
                    <li className={styles.list}><Link to={'/rendez-vous'} className={styles.link} onClick={() => setMenu(false)}>RESERVATIONS</Link></li>
                    <li className={styles.list}><Link to={'/contact'} className={styles.link} onClick={() => setMenu(false)}>CONTACT</Link></li>
                    <li className={styles.list}><Link to={'/conditions-de-vente'} className={styles.link} onClick={() => setMenu(false)}>CONDITIONS DE VENTE</Link></li>
                    <li className={styles.list}><Link to={'/mentions-legales'} className={styles.link} onClick={() => setMenu(false)}>MENTIONS LEGALES</Link></li>
                </ul>
                {/* </div> */}
                {/* <div>
                    <p>Section sub category</p>
                </div> */}
                {/* <div className={styles.sectionimage}> */}
                {/* <p>Section image</p> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Header
