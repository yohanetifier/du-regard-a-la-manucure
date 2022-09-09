import Image from '../../../Image/Image';
import styles from './LayoutThreeImg.module.scss';
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img2 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img3 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import { Assets } from '../Concept2';


export default function LayoutThreeImg({ assets }: Assets) {
    return (
        <div className={styles.imgwrapper}>
            {assets.map(({ src, alt, className }) => (
                <Image src={src} alt={alt} classNamewrapper={`${styles[className]}`} />
            ))}
        </div>
    )
}

