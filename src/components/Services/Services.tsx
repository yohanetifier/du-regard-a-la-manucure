import styles from './Service.module.scss';
import Title from '../Title/Title';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

function Service() {
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
    const [firstAnimationIsOver, setFirstAnimationIsOver] = useState(false);
    const [secondAnimationIsOver, setSecondAnimationIsOver] = useState(false);
    const [thirdAnimationIsOver, setThirdAnimationIsOver] = useState(false);
    const [fourthAnimationIsOver, setFourthAnimationIsOver] = useState(false);

    return (
        <div className={styles.mainwrapper} ref={wrapper}>
            {fourthAnimationIsOver &&
                <div className={styles.titlewrapper}>
                    <motion.h2
                        className={styles.titlesection}
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                    >Nos Services
                    </motion.h2>
                </div>
            }
            <div className={styles.imgwrapper}>
                {isInView &&
                    <motion.div
                        className={styles.img1wrapper}
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.10 }}
                        onAnimationComplete={() => setFirstAnimationIsOver(true)}

                    >
                        <div className={styles.pwrapper}>
                            {thirdAnimationIsOver &&
                                <motion.p
                                    className={styles.title}
                                    initial={{ y: 200 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1 }}
                                    onAnimationComplete={() => setFourthAnimationIsOver(true)}
                                >Cils</motion.p>}
                        </div>
                    </motion.div>}
                {firstAnimationIsOver &&
                    <motion.div
                        className={styles.img2wrapper}
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.10 }}
                        onAnimationComplete={() => setSecondAnimationIsOver(true)}
                    >
                        <div className={styles.pwrapper}>
                            {thirdAnimationIsOver &&
                                <motion.p
                                    className={styles.title}
                                    initial={{ y: 200 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1 }}
                                >Sourcils</motion.p>}
                        </div>
                    </motion.div>}
                {secondAnimationIsOver &&
                    <motion.div
                        className={styles.img3wrapper}
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.10 }}
                        onAnimationComplete={() => setThirdAnimationIsOver(true)}
                    >
                        <div className={styles.pwrapper}>
                            {thirdAnimationIsOver &&
                                <motion.p
                                    className={styles.title}
                                    initial={{ y: 200 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1 }}
                                >Ongles</motion.p>}
                        </div>
                    </motion.div>}
            </div>
        </div>
    )
}

export default Service; 