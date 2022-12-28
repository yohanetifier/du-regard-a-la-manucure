import { motion } from 'framer-motion';
import styles from './Description.module.scss';
import { forwardRef, Ref } from 'react';

interface Props {
    children: string
    className?: string
    animationOnTitleOver?: boolean
}

// function Description({ children, className, animationOnTitleOver }: Props) {
//     return (
//         <div className={`${styles.wrapper} ${className}`}>
//             {/* {animationOnTitleOver ?
//                 <motion.p
//                     className={` ${styles.translateY}`}
//                     initial={{ y: 200 }}
//                     animate={{ y: 0 }}
//                     transition={{ duration: 2 }}
//                 >
//                     {children}
//                 </motion.p>
//                 : */}
//             <p className={` ${styles.translateY}`}>
//                 {children}
//             </p>


//         </div>

//     )
// }


const Description = forwardRef(({ children, className }: Props, ref: Ref<HTMLDivElement>) => (
    <div className={`${styles.wrapper} ${className}`} >
        <p ref={ref}>
            {children}
        </p>
    </div>
))

export default Description; 