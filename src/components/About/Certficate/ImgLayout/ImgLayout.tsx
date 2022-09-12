import styles from "./ImgLayout.module.scss";
import Image from "../../../Image/Image";
import { Assets } from "../../Concept2/Concept2";

export default function ImgLayout({ assets }: Assets) {
    return (
        <div className={styles.imgwrapper}>
            {assets.map(({ src, alt, className }) => (
                <Image src={src} alt={alt} classNamewrapper={`${styles[className!]}`} />
            ))}
        </div>
    )
}