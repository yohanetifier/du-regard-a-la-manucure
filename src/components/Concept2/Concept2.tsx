import styles from './Concept2.module.scss';
import Image from "../Image/Image";
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import Title from "../Title/Title";


export default function Concept2() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.imgwrapper}>
                <Image
                    src={img1}
                    alt={img1}
                    classNamewrapper={styles.imgfirstwrapper}
                />
                <Image
                    src={img1}
                    alt={img1}
                    classNamewrapper={styles.imgsecondwrapper}
                />
                <Image
                    src={img1}
                    alt={img1}
                    classNamewrapper={styles.imgthirdwrapper}
                />
            </div>
            <div className={styles.descriptionwrapper}>
                <Title
                    children="test"
                />
                <p>Parce que vos mains et vos pieds ont besoin d'être chouchouté comme ils le méritent. Du regard à la Manucure propose aussi des soins complets à domicile.
                    Elle réalise, entre autres, la pose de gel X, une technique de pose de faux ongles, pour arborer des mains féminines et soignées pendant plusieurs semaines.

                </p>
            </div>
        </div>
    )
}
