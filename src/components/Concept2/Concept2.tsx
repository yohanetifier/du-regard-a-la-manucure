import styles from './Concept2.module.scss';
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img2 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img3 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import LayoutThreeImg from './LayoutThreeImg/LayoutThreeImg';
import DescriptionWrapper from "./DescriptionWrapper/DescriptionWrapper";


interface Props {
    src: string
    alt: string
    className: string

}

const assets = [
    {
        src: img1,
        alt: img1,
        className: styles.imgfirstwrapper
    },
    {
        src: img2,
        alt: img2,
        className: styles.imgsecondwrapper
    },
    {
        src: img3,
        alt: img3,
        className: styles.imgthirdwrapper
    },
]

export default function Concept2() {
    return (
        <div className={styles.mainwrapper}>
            < LayoutThreeImg
                assets={assets}
            />
            <div className={styles.descriptionwrapper}>
                <DescriptionWrapper
                    title="Du Regard à la Manucure"
                    description="Parce que vos mains et vos pieds ont besoin d'être chouchouté comme ils le méritent. Du regard à la Manucure propose aussi des soins complets à domicile.
                    Elle réalise, entre autres, la pose de gel X, une technique de pose de faux ongles, pour arborer des mains féminines et soignées pendant plusieurs semaines.
                    Vous pourrez aussi bénéficier de la pose d'un vernis semi-permanent, d'un baby boomer, d'une french ou craquer pour le nail art ou l'incrustation pour donner une touche
                    esthétique et originale à vos ongles. Et quelle que soit la prestation choisie, la manucure russe est offerte."
                />
            </div>
        </div>
    )
}
