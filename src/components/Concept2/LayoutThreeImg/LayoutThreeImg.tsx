import Image from '../../Image/Image';
import styles from './LayoutThreeImg.module.scss';
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img2 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img3 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';

interface ValueProps {
    src: string
    alt: string
    className: string
}

interface Props {
    assets: ValueProps[]
}

export default function LayoutThreeImg({ assets }: Props) {
    return (
        <div className={styles.imgwrapper}>
            {assets.map(({ src, alt, className }) => (
                <Image src={src} alt={alt} classNamewrapper={className} />
            ))}
        </div>
    )
}

