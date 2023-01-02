import styles from './Title.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef, forwardRef, Ref } from "react";

interface Props {
    children: string
    className?: string
    animationOver?: boolean
    setAnimationOnTitleOver?: (arg: boolean) => void
}

const Title = forwardRef(({ children, className }: Props, ref: Ref<HTMLHeadingElement>) => (
    <div className={styles.mainwrapper}>
        <h2 className={`${className} ${styles.defaultstyles}`} ref={ref}>
            {children}
        </h2>
    </div>
))

export default Title;