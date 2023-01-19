import styles from './Services.module.scss';
import Title from '../Title/Title';
import { motion, useInView } from 'framer-motion';
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SelectedService } from '../App/App';
import Button from "../Button/Button";

function Service() {
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
    const [firstAnimationIsOver, setFirstAnimationIsOver] = useState<boolean>(false);
    const [secondAnimationIsOver, setSecondAnimationIsOver] = useState<boolean>(false);
    const [thirdAnimationIsOver, setThirdAnimationIsOver] = useState<boolean>(false);
    const [fourthAnimationIsOver, setFourthAnimationIsOver] = useState<boolean>(false);
    const choosenService = useContext(SelectedService);
    const { selectedService, setSelectedService } = choosenService;
    const motionButton = motion(Button);


    return (
        <div className={styles.mainwrapper} ref={wrapper}>
            {isInView &&
                <div className={styles.titlewrapper}>
                    <motion.h2
                        className={styles.titlesection}
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        onAnimationComplete={() => setFirstAnimationIsOver(true)}
                    >Nos Services
                    </motion.h2>
                </div>
            }
            <div className={styles.imgwrapper}>
                {firstAnimationIsOver &&
                    <motion.div
                        className={styles.img1wrapper}
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.10 }}
                        onAnimationComplete={() => setSecondAnimationIsOver(true)}
                    >
                        <Link className={styles.pwrapper} to='/services' onClick={() => setSelectedService('Cils')}>
                            {fourthAnimationIsOver &&
                                <motion.p
                                    className={styles.title}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                >Cils</motion.p>
                                }
                        </Link>
                    </motion.div>}
                {secondAnimationIsOver &&
                    <motion.div
                        className={styles.img2wrapper}
                        initial={{ y: "-100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.10 }}
                        onAnimationComplete={() => setThirdAnimationIsOver(true)}
                    >
                        <Link className={styles.pwrapper} to='/services' onClick={() => setSelectedService('Sourcils')}>
                            {fourthAnimationIsOver &&
                                <motion.p
                                    className={styles.title}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                >Sourcils</motion.p>}
                        </Link>
                    </motion.div>}
                {thirdAnimationIsOver &&
                    <motion.div
                        className={styles.img3wrapper}
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.10 }}
                        onAnimationComplete={() => setFourthAnimationIsOver(true)}
                    >
                        <Link className={styles.pwrapper} to='/services' onClick={() => setSelectedService('Ongles')}>
                            {fourthAnimationIsOver &&
                                <motion.p
                                    className={styles.title}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                >Ongles</motion.p>}
                        </Link>
                    </motion.div>}
            </div>
        </div>
    )
}

export default Service; 