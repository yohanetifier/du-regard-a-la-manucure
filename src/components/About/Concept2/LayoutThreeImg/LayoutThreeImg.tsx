import Image from '../../../Image/Image';
import styles from './LayoutThreeImg.module.scss';
import { Assets } from '../Concept2';
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";


export default function LayoutThreeImg({ assets }: Assets) {
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
    const [inView, setInView] = useState(true);


    const container = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
            transition: {
                delayChildren: .6,
                staggerChildren: 0.9
            }
        }
    }

    const item = {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1,
            transition: {
                duration: 5
            }
        },
    }


    return (

        <motion.div
            className={styles.imgwrapper}
            ref={wrapper}
            variants={container}
        >
            {assets.map(({ src, alt, className }) => (
                <motion.div
                    className={`${styles[className!]}`}
                    variants={item}
                >
                    <Image
                        src={src}
                        alt={alt}
                        classNamewrapper={styles.fullHeight}
                    />
                </motion.div>


            ))}
        </motion.div>
    )
}

