import styles from './SecondSection.module.scss';
import { useRef } from "react";
import img2 from '../../assets/images/hadis-safari-A7rkoSFjrG0-unsplash.jpg';
import img1 from '../../assets/images/sara-dabaghian-wZx6BeqZNUk-unsplash.jpg';
import { delay, motion, useInView } from 'framer-motion';
import { useState, useContext } from 'react';
import Image from '../Image/Image';
import { BackgroundColor } from '../App/App';

type QuoteProps = {
    sentence: string
}

interface Props {
    img1: string
    alt1: string
    img2: string
    alt2: string
    quote: QuoteProps[]
}

function SecondSection({ img1, alt1, img2, alt2, quote }: Props) {
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
    const [isOver, setIsOver] = useState<boolean>(false);
    const MotionImage = motion(Image);

    const container = {
        show: {
            transition: {
                staggerChildren: 1,
            }
        }
    }

    const item = {
        hidden: {
            x: -500,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeIn",
            }
        }
    }

    return (
        <div className={styles.mainwrapper} ref={wrapper}>
            {isInView &&
                <MotionImage
                    src={img1}
                    alt={alt1}
                    classNamewrapper={styles.imageleftwrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    // animation={true}
                    onAnimationStart={() => setIsOver(true)}
                />
            }
            {isOver &&
                <motion.div
                    className={styles.sentence}
                    variants={container}
                    initial={isOver && "hidden"}
                    animate={isOver && "show"}
                >
                    {quote.map(({ sentence }, i) => (
                        <motion.p key={i} variants={item}> {sentence} </motion.p>
                    ))}
                </motion.div>}
            {isInView &&
                <MotionImage
                    src={img2}
                    alt={alt2}
                    classNamewrapper={styles.imagerightwrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                // animation={true}
                />
            }
        </div>
    )
}

export default SecondSection; 