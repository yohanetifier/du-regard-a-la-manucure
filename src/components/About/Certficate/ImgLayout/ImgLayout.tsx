import styles from "./ImgLayout.module.scss";
import Image from "../../../Image/Image";
import { Assets } from "../../Concept2/Concept2";
import { motion } from 'framer-motion';

interface Props extends Assets {
    isInView: boolean
}

export default function ImgLayout({ assets, isInView }: Props) {
    const MotionImage = motion(Image);
    const container = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: .6,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },

    }
    return (
        <motion.div
            className={styles.imgwrapper}
            variants={container}
            initial="initial"
            animate={isInView && "animate"}

        >
            {assets.map(({ src, alt, className }) => (
                <MotionImage
                    src={src}
                    alt={alt}
                    classNamewrapper={`${styles[className!]}`}
                    variants={item}
                />
            ))}
        </motion.div>
    )
}