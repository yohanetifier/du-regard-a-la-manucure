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
import { Props } from '../Home/Home'; 

function Work({animationDone}: Props ) {
    const [firstAnimationIsOver ,setFirstAnimationIsOver] = useState(false); 
    const [secondAnimationIsOver ,setSecondAnimationIsOver] = useState(false); 
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
                    initial={{y: 200}}
                    animate={{y: 0}}
                    transition={{
                        duration: 1
                    }}
                    onAnimationComplete={() => setFirstAnimationIsOver(true)}
                    >Mes Succès
                </motion.h2>}
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
                   <motion.div
                        className={styles.wrapperimg}
                        variants={item}
                    >
                        <img src={img1} className={styles.img} />
                    </motion.div>
                
                    <motion.div
                        className={styles.wrapperimg}
                        variants={item}
                    >
                        <img src={img2} className={styles.img} />
                    </motion.div>
                
                    <motion.div
                        className={styles.wrapperimg}
                        variants={item}
                    >
                        <img src={img3} className={styles.img} />
                    </motion.div>
                
                    <motion.div
                        className={styles.wrapperimg}
                        variants={item}
                    >
                        <img src={img4} className={styles.img} />
                    </motion.div>
                    </motion.div>}

            
           {secondAnimationIsOver &&  
           <motion.div 
            className={styles.wrapperlink}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 1
            }}
            onAnimationComplete={() => animationDone(true)}
            >
                <Link to="/succes" className={styles.link}>Voir plus de succès</Link>
            </motion.div>}
            </div>
        </div>
    )
};

export default Work;

