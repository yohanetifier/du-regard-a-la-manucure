import { motion } from 'framer-motion';
import styles from './Description.module.scss';

interface Props {
    children: string
    className?: string
    animationOnTitleOver?: boolean
}

function Description({ children, className, animationOnTitleOver }: Props) {
    return (
        <>
            {animationOnTitleOver ?
                <div className={styles.wrapper}>
                    <motion.p
                        className={`{className} ${styles.translateY}`}
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        {children}
                    </motion.p>
                </div>
                :
                <div className={styles.wrapper}>
                    <p className={`{className} ${styles.translateY}`}>
                        {children}
                    </p>
                </div>
            }
        </>

    )
}

export default Description; 