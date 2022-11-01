import Image from '../Image/Image';
import styles from './Concept.module.scss';
import Button from "../Button/Button";
import { useState, useRef } from "react";
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
    const ref = useRef<HTMLImageElement | null>(null);
    const ifIsInViewport = useIntersection(ref, "-200px");
    const state = useState(true);
    const test = useSpring({
        from: { opacity: "0" },
        to: { opacity: state ? "1" : "0" },
        config: { duration: 2000 }
    })

    if (ifIsInViewport) {
        console.log('ifIsInViewport');
    }

    return (

        <div className={styles.mainwrapper}>
            <div className={styles.imagewrapper}>
                <animated.img
                    src={src}
                    alt={alt}
                    // classNamewrapper={styles.firstimage}
                    style={{ ...test }}
                    ref={ref}
                />
            </div>
            <div className={styles.descriptionwrapper}>
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
            </div>
        </div >

    )
}

export default Concept; 