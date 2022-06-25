// import Image from '../Image/Image'
import Menu from '../Menu/Menu'
import styles from './Home.module.scss'
import imageLeft from '../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg'
import imageRight from '../../assets/images/pesce-huang-CNMMvIQJS2Y-unsplash.jpg'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperImageLeft}>
                <h2>Get Ready with us</h2>
                <img className={styles.imageLeft} src={imageLeft} alt="" />
            </div>
            <Menu />
            <div className={styles.wrapperImageRight}>
                <h2 className={styles.titleImageRight}>From prom</h2>
                <img className={styles.imageRight} src={imageRight} alt="" />
            </div>
        </div>
    )
}