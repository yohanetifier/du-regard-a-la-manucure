// import imgAbove from '../../assets/images/designecologist-r-Ej0NQmFlQ-unsplash.jpg'
import imgAbove from '../../assets/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg'
import imgBelowLeft from '../../assets/images/gabe-pierce-_wK8VnF5yao-unsplash.jpg'
// import imgBelowRight from '../../assets/images/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg'
import imgBelowRight from '../../assets/images/apostolos-vamvouras-Mky1mc85XQQ-unsplash (1).jpg'
import styles from './Banner.module.scss'

function Banner() {
    return (
        <div className={styles.mainwrapper}>
            {/* <div className={styles.wrapperimgabove}>
                <img className={styles.imgabove} src={imgAbove} alt="" />
            </div> */}
            <div className={styles.wrapperimgbelow}>
                {/* <img className={styles.imgbelowleft} src={imgBelowLeft} alt="" /> */}
                <img className={styles.imgbelowright} src={imgBelowRight} alt="" />
            </div>
        </div>
    )
}

export default Banner; 