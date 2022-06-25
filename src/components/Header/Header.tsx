import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

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
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                {/* <img src={logo} alt="" className={styles.img}/> */}
                <h1 className={styles.title}>Du regard à la manucure</h1>
            </div>
            <ul className={styles.menu}>
                {navigation.map(({ label, to }, i) => (
                    <Link to={to} className={styles.link} key={i}>{label}</Link>
                ))}
            </ul>
        </div>
    )
}

export default Header
