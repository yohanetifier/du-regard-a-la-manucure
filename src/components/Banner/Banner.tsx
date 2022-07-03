import imgBelowRight from '../../assets/images/apostolos-vamvouras-Mky1mc85XQQ-unsplash (1).jpg'
import styles from './Banner.module.scss'

function Banner() {
    return (
        <div className={styles.mainwrapper}>
            <img className={styles.imgbelowright} src={imgBelowRight} alt="" />
        </div>
    )
}

export default Banner; 