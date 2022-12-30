import styles from './ServiceDescription.module.scss';
import TextWrapper from "./TextWrapper/TextWrapper";
import LayoutImg from './LayoutImg/LayoutImg';
import { useInView, motion } from 'framer-motion';
import { ReactComponentElement, RefObject, useRef, useEffect } from 'react';

interface Props {
    src: string
    alt: string
    title: string
    description: string
}

interface Assets {
    assets: Props[]
}

export default function ServiceDescription({ assets }: Assets) {

    return (
        <>
            {assets.map(({ src, alt, title, description }, i) => (
                <div className={i % 2 === 1 ? styles.mainwrapper : `${styles.mainwrapper} ${styles.reverserow}`}>
                    <LayoutImg
                        src={src}
                        alt={alt}
                        isReversedRow={i % 2 === 1}
                        animation={true}
                    />
                    <TextWrapper
                        title={title}
                        description={description}
                        isReversedRow={i % 2 === 1}
                        animation={true}
                    />
                </div>
            ))}

        </>
    )
}