import styles from './Certificate.module.scss';
import Title from "../../Title/Title";
import { Assets } from '../Concept2/Concept2';
import Image from '../../Image/Image';
import ImgLayout from './ImgLayout/ImgLayout';

export default function Certificate({ title, assets }: Assets) {
    return (
        <div className={styles.mainwrapper}>
            <Title className={styles.title}>{title!}</Title>
            <ImgLayout
                assets={assets} />
        </div>
    )
}