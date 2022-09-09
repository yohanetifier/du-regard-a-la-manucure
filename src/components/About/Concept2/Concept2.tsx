import styles from './Concept2.module.scss';
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img2 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img3 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import LayoutThreeImg from './LayoutThreeImg/LayoutThreeImg';
import DescriptionWrapper from "./DescriptionWrapper/DescriptionWrapper";

export interface Props {
    src: string
    alt: string
    className: string

}

export interface Assets {
    assets: Props[]
    description?: string
    title?: string
}

export default function Concept2(props: Assets) {
    return (
        <div className={styles.mainwrapper}>
            < LayoutThreeImg
                assets={props.assets}
            />
            <div className={styles.descriptionwrapper}>
                <DescriptionWrapper
                    title={props.title!}
                    description={props.description!}
                />
            </div>
        </div>
    )
}
