import Image from '../../../Image/Image';
import styles from './LayoutThreeImg.module.scss';
import { Assets } from '../Concept2';
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


export default function LayoutThreeImg({ assets }: Assets) {
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
    const [ inView, setInView ] = useState(false);
    
    const container = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
            transition: {
                delayChildren: .6,
                staggerChildren: 5
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
                duration: 10
            }
        },
    }


    return (

        <motion.div
            className={styles.imgwrapper}
            ref={wrapper}
            variants={container}
            initial="initial"
            animate="animate"
        >
            {assets.map(({ src, alt, className}) => (
                <>
            <motion.div
                    className={`${styles[className!]}`}
                    variants={item}
                    // key={index}
                    >
                    { inView && <Image
                        src={src}
                        alt={alt}
                        classNamewrapper={styles.fullHeight}
                        // variants={item}
                        />}
                </motion.div>
                </>


            ))}
        </motion.div>
    )
}

