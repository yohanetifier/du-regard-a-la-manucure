import Image from '../Image/Image';
import styles from './Concept.module.scss';
import Button from "../Button/Button";
import { useRef, } from "react";
import { motion, useInView } from "framer-motion";

interface InitialProps {
    opacity?: number
    x?: string
}

interface TransitionProps {
    duration?: number
}

interface AnimateProps {
    opacity?: number
}


export interface Img {
    src: string
    alt: string
    classNamewrapper?: string
    animation?: boolean
    initial?: InitialProps
    animate?: AnimateProps
    transition?: TransitionProps
    onAnimationComplete?: () => void
}

interface Props {
    src: string
    alt: string
    title: string
    children: string
    to: string
    label: string
    secondTo?: string
    secondLabel?: string
    numberOfButton: string

}

function Concept({
    src,
    alt,
    title,
    children,
    to,
    label,
    secondTo,
    secondLabel,
    numberOfButton,

}: Props) {

    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, { once: true, amount: 0.5 });

    return (

        <div className={styles.mainwrapper} ref={scrollRef}>
            {isInView &&
                <motion.div
                    className={styles.imagewrapper}
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        classNamewrapper={styles.firstimage}
                    />
                </motion.div>}
            {isInView &&
                <motion.div
                    className={styles.descriptionwrapper}
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.layoutwrapper}>
                        <span className={styles.test}>
                            <motion.h2
                                className={styles.title}
                                initial={{ y: 80 }}
                                animate={{ y: 0 }}
                                transition={{
                                    delay: 2,
                                    duration: 1
                                }}
                            > {title}
                            </motion.h2>
                        </span>
                        <div className={styles.exercice}>
                            <motion.p
                                className={styles.description}
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{
                                    delay: 3,
                                    duration: 1,
                                    staggerChildren: 0.05
                                }}
                            >
                                {children}
                            </motion.p>
                        </div>
                        {numberOfButton === "one" ?
                            <motion.div
                                className={styles.testthree}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 4,
                                    duration: 1,
                                }}
                            >
                                <Button
                                    to={to}
                                    label={label}
                                />
                            </motion.div>
                            :
                            <div className={styles.buttonwrapper}>
                                <Button
                                    to={to}
                                    label={label} />
                                <Button
                                    to={secondTo!}
                                    label={secondLabel!} />
                            </div>}
                    </div>
                </motion.div>}
        </div >

    )
}

export default Concept; 