import styles from './SecondSection.module.scss';
import { useRef } from "react";
import img2 from '../../assets/images/hadis-safari-A7rkoSFjrG0-unsplash.jpg'
import img1 from '../../assets/images/sara-dabaghian-wZx6BeqZNUk-unsplash.jpg'
import { delay, motion, useInView } from 'framer-motion';
import { useState, useContext } from 'react';
import Image from '../Image/Image';
import { BackgroundColor } from '../App/App';

function SecondSection() {
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
    const forBackgroundColor = useInView(wrapper, { amount: 0.5 });
    const [isOver, setIsOver] = useState(false);
    const MotionImage = motion(Image);
    const { isBackgroundColorIsPink, setIsBackgroundColorIsPink } = useContext(BackgroundColor);

    if (forBackgroundColor) {
        setIsBackgroundColorIsPink(true);
    } else {
        setIsBackgroundColorIsPink(false);
    }

    console.log('isBackgroundColorIsPink', isBackgroundColorIsPink);


    const container = {
        show: {
            transition: {
                staggerChildren: 0.8,
                // duration: 2
            }
        }
    }

    const item = {
        hidden: {
            x: -100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        }
    }

    return (
        <div className={styles.mainwrapper} ref={wrapper}>
            {isInView &&
                <MotionImage
                    src={img1}
                    alt={img1}
                    classNamewrapper={styles.imageleftwrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    // animation={true}
                    onAnimationComplete={() => setIsOver(true)}
                />
            }
            {isOver &&
                <motion.div
                    className={styles.sentence}
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.p variants={item}> La beauté </motion.p>
                    <motion.p variants={item}> est </motion.p>
                    <motion.p variants={item}> dans les yeux </motion.p>
                    <motion.p variants={item}> de celui  qui regarde.  </motion.p>
                    <motion.p variants={item}> Oscar Wilde </motion.p>
                </motion.div>}
            {isInView &&
                <MotionImage
                    src={img2}
                    alt={img2}
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