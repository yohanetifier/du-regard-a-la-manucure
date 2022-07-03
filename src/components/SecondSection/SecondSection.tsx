import styles from './SecondSection.module.scss';
// import Image from '../Image/Image';
// import { Img } from '../Concept/Concept'
import img1 from '../../assets/images/ana-francisconi-x-CXDIuhS3c-unsplash.jpg'
import img2 from '../../assets/images/hadis-safari-A7rkoSFjrG0-unsplash.jpg'

function SecondSection() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.imageleftwrapper}>
                <img src={img1} alt="" className={styles.imgleft} />
                <div className={styles.sentence}>
                    <p> La beauté est dans les yeux de celui qui regarde. Oscar Wilde</p>
                    {/* <p>
                        La beauté du regard
                    </p> */}
                </div>

            </div>
            <div className={styles.imagerightwrapper}>
                <img src={img2} alt="" className={styles.imgright} />
            </div>
        </div>
    )
}

export default SecondSection; 