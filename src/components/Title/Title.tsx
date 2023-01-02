import styles from './Title.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef, forwardRef, Ref } from "react";

interface Props {
    children: string
    className?: string
    animationOver?: boolean
    setAnimationOnTitleOver?: (arg: boolean) => void
}

// function Title({ children, className, animationOver, setAnimationOnTitleOver }: Props) {

//     return (
//         <>
//             {/* {animationOver ? */}
//             {/* <div className={styles.mainwrapper}>
//                     <motion.h2
//                         className={`${className} ${styles.defaultstyles} ${styles.translate}`}
//                         initial={{ y: 100 }}
//                         animate={{ y: 0 }}
//                         transition={{ duration: 2 }}
//                         onAnimationStart={() => setAnimationOnTitleOver!(true)}

//                     >
//                         {children}
//                     </motion.h2>
//                 </div>
//                 : */}
//             <div className={styles.mainwrapper}>
//                 <h2 className={`${className} ${styles.defaultstyles}`}>
//                     {children}
//                 </h2>
//             </div>
//             {/* } */}
//         </>
//     )
// }

const Title = forwardRef(({ children, className }: Props, ref: Ref<HTMLHeadingElement>) => (
    <div className={styles.mainwrapper}>
        <h2 className={`${className} ${styles.defaultstyles}`} ref={ref}>
            {children}
        </h2>
    </div>
))

export default Title;