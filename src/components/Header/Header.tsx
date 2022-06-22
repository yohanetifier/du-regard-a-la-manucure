import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

interface Navigation {
    label: string
    to: string
}

const navigation: Navigation[] = [
    {
        label: 'Home',
        to: '/home'
    },
    {
        label: 'services',
        to: '/services'
    },
    {
        label: 'Contact',
        to: '/contact'
    },

]

const Header = () => {
    return (
        <ul className={styles.header}>
            {navigation.map(({ label, to}, i) => (
                <Link to={to} className={styles.link} key={i}>{label}</Link>
            ))}
            <button>Book now</button>
        </ul>
    )
}

export default Header 