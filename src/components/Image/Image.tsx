import { Img } from '../Concept/Concept'
import styles from "./Image.module.scss"

function Image({ src, alt, classNamewrapper }: Img) {
    return (
        <div className={classNamewrapper}>
            <img src={src} alt={alt} className={styles.img} />
        </div>
    )
}

export default Image; 