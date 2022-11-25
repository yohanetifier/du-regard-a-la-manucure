import styles from './Title.module.scss';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
    children: string
    className?: string
}

function Title({ children, className }: Props) {

    return (
        <>
            <h2 className={`${className} ${styles.defaultstyles}`}>
                {children}
            </h2>
        </>

    )
}

export default Title;