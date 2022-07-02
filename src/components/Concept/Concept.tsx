import Image from '../Image/Image';
import img1 from '../../assets/images/engin-akyurt-EeVOgK2x0E4-unsplash.jpg';
import img2 from '../../assets/images/designecologist-r-Ej0NQmFlQ-unsplash.jpg';
import styles from './Concept.module.scss';

export interface Img {
    src: string
    alt: string
    className: string
}

const image = [
    {
        src: img1,
        alt: img1, 
        className: 'first-image'
    },
    {
        src: img2,
        alt: img2, 
        className: 'second-image'
    },
]

function Concept() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.imagewrapper}>
                {image.map(({ src, alt, className }, i) => (
                    <Image src={src} alt={alt}  className={className} />
                ))}
            </div>
            <div className={styles.descriptionwrapper}>
                <p>Description</p>
            </div>
        </div>
    )
}

export default Concept; 