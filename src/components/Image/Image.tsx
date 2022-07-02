import { Img } from '../Concept/Concept'
import styles from "./Image.module.scss"

function Image({ src, alt, className }: Img) {
    return (
        <div className={styles[`${className}`]}>
            <img src={src} alt={alt} className={styles.img}  />
        </div>
    )
}

export default Image; 