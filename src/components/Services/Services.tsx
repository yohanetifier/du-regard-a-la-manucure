import styles from './Service.module.scss'; 
import img1 from '../../assets/images/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg'; 
import img2 from '../../assets/images/gabe-pierce-_wK8VnF5yao-unsplash.jpg'; 
// import img3 from '../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg'; 
import img3 from '../../assets/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg'; 

function Service() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.imgwrapper}>
                <div className={styles.img1wrapper}>
                    <img src={img1} alt="" className={styles.img1} />
                </div>
                <div className={styles.img2wrapper}>
                    <img src={img2} alt="" className={styles.img2}/>
                </div>
                <div className={styles.img3wrapper}>
                    <img src={img3} alt=""  className={styles.img3}/>
                </div>
            </div>
            <div>
                <h2></h2>
            </div>

        </div>
    )
}

export default Service; 