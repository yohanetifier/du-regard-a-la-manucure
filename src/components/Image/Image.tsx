import { Img } from '../Concept/Concept';
import styles from "./Image.module.scss";
import { forwardRef, Ref } from 'react';


// export default function Image({
//     src,
//     alt,
//     classNamewrapper,
//     ref,
//     animation,
//     initial,
//     animate,
//     transition,
//     onAnimationComplete,
// }: Img) {
//     return (
//         <>
//             {/* {animation ?
//                 <motion.div
//                     className={classNamewrapper}
//                     initial={initial}
//                     animate={animate}
//                     transition={transition}
//                     onAnimationComplete={onAnimationComplete}
//                 >
//                     <img src={src} alt="" className={styles.img} />
//                 </motion.div>
//                 : */}
//             <div className={classNamewrapper} ref={ref}>
//                 <img src={src} alt={alt} className={styles.img} />
//             </div>
//         </>

//     )
// }

const Image = forwardRef(({ classNamewrapper, src, alt }: Img, ref: Ref<HTMLDivElement>) => (
    <div className={classNamewrapper} ref={ref} >
        <img src={src} className={styles.img} alt={alt} />
    </div>
))

export default Image;

