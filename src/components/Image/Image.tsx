import { Img } from '../Concept/Concept';
import styles from "./Image.module.scss";
import { motion } from 'framer-motion';

export default function Image({
    src,
    alt,
    classNamewrapper,
    animation,
    initial,
    animate,
    transition,
    onAnimationComplete,
}: Img) {
    return (
        <>
            {animation ?
                <motion.div
                    className={classNamewrapper}
                    initial={initial}
                    animate={animate}
                    transition={transition}
                    onAnimationComplete={onAnimationComplete}
                >
                    <img src={src} alt="" className={styles.img} />
                </motion.div>
                :
                <div className={classNamewrapper}>
                    <img src={src} alt={alt} className={styles.img} />
                </div>}
        </>

    )
}

