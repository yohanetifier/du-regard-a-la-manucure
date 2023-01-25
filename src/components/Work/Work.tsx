import styles from './Work.module.scss';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Img } from '../Concept/Concept'
import Title from '../Title/Title';
import Button from '../Button/Button';

export interface WorkProps {
    title: string
    img: Img[]
}

function Work({ title, img }: WorkProps) {
    const [firstAnimationIsOver, setFirstAnimationIsOver] = useState(false);
    const [secondAnimationIsOver, setSecondAnimationIsOver] = useState(false);
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
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
        <div className={styles.wrapper} ref={wrapper}>
            <div className={styles.wrappertitle}>
                {isInView &&
                    <motion.h2
                        className={styles.title}
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1
                        }}
                        onAnimationComplete={() => setFirstAnimationIsOver(true)}
                    >{title}
                    </motion.h2>
                }
            </div>
            <div
                className={styles.wrapperlayout}
            >
                {firstAnimationIsOver && <motion.div
                    className={styles.mainwrapper}
                    variants={container}
                    initial="initial"
                    animate="animate"
                    onAnimationComplete={() => setSecondAnimationIsOver(true)}
                >
                    {img.map(({ src, alt }) => (
                        <motion.div
                            className={styles.wrapperimg}
                            variants={item}
                        >
                            <img src={src} className={styles.img} />
                        </motion.div>
                    ))}
                </motion.div>}


                {secondAnimationIsOver &&
                    <motion.div
                        className={styles.wrapperlink}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1
                        }}
                    >
                        <Button
                            to="https://www.instagram.com/du_regard_a_la_manucure/"
                            label="Voir plus de succès"
                            classnamelink={styles.link}
                            width='280px'
                            external={true}
                        />
                        {/* <a href="https://www.instagram.com/du_regard_a_la_manucure/" className={styles.link}>Voir plus de succès</a> */}
                    </motion.div>}
            </div>
        </div >
    )
};

export default Work;

