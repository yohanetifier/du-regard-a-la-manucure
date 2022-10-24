import styles from './Service.module.scss';
import Title from '../Title/Title'

function Service() {
    return (
        <div className={styles.mainwrapper}>
            <Title className={styles.titlesection}>Nos Services</Title>
            <div className={styles.imgwrapper}>
                <div className={styles.img1wrapper}>
                    <p className={styles.title}>Cils</p>
                    {/* <p className={styles.sentence}>
                        La beauté du regard
                    </p> */}
                </div>
                <div className={styles.img2wrapper}>
                    <div className={styles.test}>
                        <p className={styles.title}>Sourcils</p>
                    </div>
                </div>
                <div className={styles.img3wrapper}>
                    <p className={styles.title}>Ongles</p>
                </div>
            </div>
        </div>
    )
}

export default Service; 