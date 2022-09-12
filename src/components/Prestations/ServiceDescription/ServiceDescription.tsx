import styles from './ServiceDescription.module.scss';
import Image from "../../Image/Image";
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import Title from '../../Title/Title';
import TextWrapper from "./TextWrapper/TextWrapper";
import LayoutImg from './LayoutImg/LayoutImg';

interface Props {
    src: string
    alt: string
    title: string
    description: string
}

interface Assets {
    assets: Props[]
}

export default function ServiceDescription({ assets }: Assets) {
    return (
        <>
            {assets.map(({ src, alt, title, description }, i) => (
                <div className={i % 2 === 1 ? styles.mainwrapper : `${styles.mainwrapper} ${styles.reverserow}`}>
                    <LayoutImg
                        src={src}
                        alt={alt} />
                    <TextWrapper
                        title={title}
                        description={description} />
                </div>
            ))}

        </>
    )
}