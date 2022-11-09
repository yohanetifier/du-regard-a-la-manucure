import Image from '../Image/Image';
import styles from './Concept.module.scss';
import Button from "../Button/Button";
import { useState, useLayoutEffect, useRef } from "react";
import { useSpring, animated } from '@react-spring/web';
import useIntersection from '../UseIntersection/UseIntersection';

export interface Img {
    src: string
    alt: string
    classNamewrapper?: string
    ref?: null
}

interface Props {
    src: string
    alt: string
    title: string
    children: string
    to: string
    label: string
    secondTo?: string
    secondLabel?: string
    numberOfButton: string

}

function Concept({
    src,
    alt,
    title,
    children,
    to,
    label,
    secondTo,
    secondLabel,
    numberOfButton,

}: Props) {
    const wrapper = useRef<null>(null);
    const wrapperDescription = useRef<null>(null);
    const ifIsInViewport = useIntersection(wrapper, 0.5);

    const translationByTheLeft = useSpring({
        from: { transform: "translateX(-100vw)" },
        to: { transform: ifIsInViewport ? "translateX(0px)" : "translateX(-100vw)" },
        config: { duration: 1000 }
    })

    const translationByTheRight = useSpring({
        from: { transform: "translateX(100vw)" },
        to: { transform: ifIsInViewport ? 'translateX(0px)' : "translateX(100vw)" },
        config: { duration: 1000 }
    })

    return (

        <div className={styles.mainwrapper}>
            <div className={styles.imagewrapper} ref={wrapper}>
                {ifIsInViewport && <animated.img
                    src={src}
                    alt={alt}
                    className={styles.firstimage}
                    style={{ ...translationByTheLeft }}
                />}


            </div>
            {ifIsInViewport &&
                <animated.div className={styles.descriptionwrapper} ref={wrapperDescription} style={{ ...translationByTheRight }}>
                    <div className={styles.layoutwrapper}>
                        <h2 className={styles.title}> {title}</h2>
                        <p className={styles.description}>
                            {children}</p>
                        {numberOfButton === "one" ?
                            <Button
                                to={to}
                                label={label}
                            />
                            :
                            <div className={styles.buttonwrapper}>
                                <Button
                                    to={to}
                                    label={label} />
                                <Button
                                    to={secondTo!}
                                    label={secondLabel!} />
                            </div>}
                    </div>
                </animated.div>}
        </div >

    )
}

export default Concept; 