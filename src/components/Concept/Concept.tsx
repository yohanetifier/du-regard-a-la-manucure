import Image from '../Image/Image';
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import styles from './Concept.module.scss';
import Title from '../Title/Title'
import Description from '../Description/Description';
import { Link } from 'react-router-dom';
import Button from "../Button/Button";

export interface Img {
    src: string
    alt: string
    classNamewrapper: string
}

interface Props {
    src: string
    alt: string
    title: string
    children: string
    to: string
    label: string
    secondTo?: string
    secondLabel?: string
    numberOfButton: string

}

function Concept({
    src,
    alt,
    title,
    children,
    to,
    label,
    secondTo,
    secondLabel,
    numberOfButton,

}: Props) {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.imagewrapper}>
                <Image src={src} alt={alt} classNamewrapper={styles.firstimage} />
            </div>
            <div className={styles.descriptionwrapper}>
                <div className={styles.layoutwrapper}>
                    <h2 className={styles.title}> {title}</h2>
                    <p className={styles.description}>
                        {children}</p>
                    {numberOfButton === "one" ?
                        <Button
                            to={to}
                            label={label}
                        />
                        :
                        <div className={styles.buttonwrapper}>
                            <Button
                                to={to}
                                label={label} />
                            <Button
                                to={secondTo!}
                                label={secondLabel!} />
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Concept; 