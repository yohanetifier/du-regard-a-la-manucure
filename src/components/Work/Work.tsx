import styles from './Work.module.scss';
import img1 from '../../assets/images/henry-co-OpjlRo-31SI-unsplash.jpg';
import img2 from '../../assets/images/oliver-johnson-yH0dth2yEQE-unsplash.jpg';
import img3 from '../../assets/images/kartik-gada--4iMX-4MIZ8-unsplash.jpg';
import img4 from '../../assets/images/majid-akbari--CE-5hQSoOQ-unsplash.jpg';
import img5 from "../../assets/images/majid-akbari--CE-5hQSoOQ-unsplash.jpg";
import Title from "../Title/Title";
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';


function Work() {
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
    const container = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1
        }
    }

    return (
        <div className={styles.wrapper} ref={wrapper}>
            <div className={styles.wrappertitle}>
                <h2 className={styles.title}>Mes succès</h2>
            </div>
            <motion.div
                className={styles.mainwrapper}
                variants={container}
                initial="hidden"
                animate="show"
            >
                {isInView &&
                    <motion.div
                        className={styles.wrapperimg}
                        variants={item}
                    // initial="hidden"
                    // animate='show'
                    >
                        <img src={img1} className={styles.img} />
                    </motion.div>}
                {isInView &&
                    <motion.div
                        className={styles.wrapperimg}
                        variants={item}
                    >
                        <img src={img2} className={styles.img} />
                    </motion.div>}
                {isInView &&
                    <motion.div
                        className={styles.wrapperimg}
                        variants={item}
                    >
                        <img src={img3} className={styles.img} />
                    </motion.div>}
                {isInView &&
                    <motion.div
                        className={styles.wrapperimg}
                        variants={item}
                    >
                        <img src={img4} className={styles.img} />
                    </motion.div>}

            </motion.div>
            <div className={styles.wrapperlink}>
                <Link to="/succes" className={styles.link}>Voir plus de succès</Link>
            </div>
        </div>
    )
};

export default Work;

