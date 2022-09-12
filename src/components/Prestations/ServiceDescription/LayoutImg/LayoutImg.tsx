import Image from "../../../Image/Image";
import styles from './LayoutImg.module.scss';
import { Props } from "../../../About/Concept2/Concept2";

export default function LayoutImg({ src, alt }: Props) {
    return (
        <div className={styles.imgwrapper}>
            <Image src={src} alt={alt} classNamewrapper={styles.imgsubwrapper} />
        </div>
    )
}