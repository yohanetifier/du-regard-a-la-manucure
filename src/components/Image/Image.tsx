import { Img } from '../Concept/Concept'
import styles from "./Image.module.scss"

export default function Image({ src, alt, classNamewrapper }: Img) {
    return (
        <div className={classNamewrapper}>
            <img src={src} alt={alt} className={styles.img} />
        </div>
    )
}

