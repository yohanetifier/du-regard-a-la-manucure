import styles from './Service.module.scss';
// import img1 from '../../assets/images/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg';
// import img2 from '../../assets/images/gabe-pierce-_wK8VnF5yao-unsplash.jpg';
// import img3 from '../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg'; 
// import img3 from '../../assets/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg';

function Service() {
    return (
        <div className={styles.mainwrapper}>
            <h2>Nos Services</h2>
            <div className={styles.imgwrapper}>
                <div className={styles.img1wrapper}>
                    {/* <img src={img1} alt="" className={styles.img1} /> */}
                    <p className={styles.title}>Cils</p>
                    <p className={styles.sentence}>
                        La beauté du regard
                    </p>
                </div>
                <div className={styles.img2wrapper}>
                    <div className={styles.test}>
                        <p className={styles.title}>Sourcils</p>
                    </div>
                </div>
                <div className={styles.img3wrapper}>
                    {/* <img src={img3} alt="" className={styles.img3} /> */}
                    <p className={styles.title}>Ongles</p>
                </div>
            </div>
        </div>
    )
}

export default Service; 