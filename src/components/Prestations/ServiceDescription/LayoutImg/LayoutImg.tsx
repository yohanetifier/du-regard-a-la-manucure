import Image from "../../../Image/Image";
import styles from './LayoutImg.module.scss';
import { Props } from "../../../About/Concept2/Concept2";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface Animation extends Props {
    isReversedRow: boolean
    animation?: boolean
}

export default function LayoutImg({ src, alt, isReversedRow, animation }: Animation) {
    const wrapper = useRef<HTMLDivElement>(null);
    const isInView = useInView(wrapper, { once: true, amount: 0.5 });
    const MotionImage = motion(Image);

    return (
        <>
            {animation ?
                <div className={styles.imgwrapper} ref={wrapper}>
                    {isInView &&
                        <MotionImage
                            src={src}
                            alt={alt}
                            classNamewrapper={styles.imgsubwrapper}
                            initial={{ x: isReversedRow ? "-100%" : "100%" }}
                            animate={{ x: 0 }}
                            transition={{ duration: 2 }}
                        />}
                </div>
                :
                <div className={styles.imgwrapper} ref={wrapper}>
                    <Image
                        src={src}
                        alt={alt}
                        classNamewrapper={styles.imgsubwrapper}
                    />
                </div>

            }

        </>
    )
}