import { Navigation } from '../Header/Header'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

const menu: Navigation[] = [
    {
        label: 'hair',
        to: '/hair'
    },
    {
        label: 'skin',
        to: '/skin'
    },
    {
        label: 'face',
        to: '/face'
    },
    {
        label: 'nails',
        to: '/nails'
    },
]
export default function Menu() {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {menu.map(({ label, to }) => (
                    <li className={styles.items}>
                        <Link className={styles.link} to={to}>{label.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}