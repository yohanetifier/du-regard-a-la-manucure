import Image from '../Image/Image';
// import img1 from '../../assets/images/engin-akyurt-EeVOgK2x0E4-unsplash.jpg';
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import styles from './Concept.module.scss';
import Title from '../Title/Title'
import Description from '../Description/Description';
import { Link } from 'react-router-dom'; 

export interface Img {
    src: string
    alt: string
    classNamewrapper: string
}

function Concept() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.imagewrapper}>
                    <Image src={img1} alt={img1} classNamewrapper={styles.firstimage} />
            </div>
            <div className={styles.descriptionwrapper}>
                <div className={styles.layoutwrapper}>
                    <h2 className={styles.title}> Notre Concept</h2>
                    <p className={styles.description}>
                      Que diriez-vous de sublimer vos ongles et votre regard sans sortir de chez vous? C'est possible avec Du Regard à La Manucure, 
                      professionnelle de l'esthétique, prothésiste ongulaire. L'institut Du Regard à la Manucure est basé à Aincourt, dans le Val d'Oise et se 
                      déplace dans toute l'Ile de France pour vous mettre en beauté.</p>
                      <Link to={"/about"} className={styles.link}>En savoir plus</Link>
                </div>
            </div>
        </div>
    )
}

export default Concept; 