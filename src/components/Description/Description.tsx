import { motion } from 'framer-motion';
import styles from './Description.module.scss';
import { forwardRef, Ref } from 'react';

interface Props {
    children: string
    className?: string
    animationOnTitleOver?: boolean
}

const Description = forwardRef(({ children, className }: Props, ref: Ref<HTMLDivElement>) => (
    <div className={`${styles.wrapper} ${className}`} >
        <p ref={ref}>
            {children}
        </p>
    </div>
))

export default Description; 