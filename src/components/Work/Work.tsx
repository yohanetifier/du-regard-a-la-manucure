import styles from './Work.module.scss'; 
import img1 from '../../assets/images/henry-co-OpjlRo-31SI-unsplash.jpg'
import img2 from '../../assets/images/oliver-johnson-yH0dth2yEQE-unsplash.jpg'
import img3 from '../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg'
import img4 from '../../assets/images/majid-akbari--CE-5hQSoOQ-unsplash.jpg'

function Work () {
    return (
        <div className={styles.mainwrapper}>
            <h2 className={styles.title}>Success</h2>
            {/* Verticale Layout */}
            {/* <div className={styles.imgwrapper}>
                <img src={img1} className={styles.img} />
            </div>
            <div className={styles.imgwrapper}>
                <img src={img2} className={styles.img} />
            </div>
            <div className={styles.imgwrapper}>
                <img src={img3} className={styles.img} />
            </div>
            <div className={styles.imgwrapper}>
                <img src={img4} className={styles.img} />
            </div> */}

            {/*  Horizontale Layout */}
            {/* <div className={styles.imgwrapperleft}>
                <img src={img1} className={styles.img} />
                <img src={img2} className={styles.img} />
            </div>
            <div className={styles.imgwrapperright}>
                <img src={img3} className={styles.img} />
                <img src={img4} className={styles.img} />
            </div> */}

            {/* Img take all width */}
            <img src={img1} className={styles.img1} />
            <img src={img2} className={styles.img2} />
            <img src={img3} className={styles.img3} />
            <img src={img4} className={styles.img4} />
        </div>
    )
}; 

export default Work; 

