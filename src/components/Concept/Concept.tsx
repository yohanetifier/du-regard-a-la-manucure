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
    const wrapper = useRef(null);
    const ifIsInViewport = useIntersection(wrapper, "-200px");
    const [state, setState] = useState<boolean>(false);

    const test = useSpring({
        from: { transform: "translateX(-100vw)" },
        to: { transform: ifIsInViewport ? "translateX(0px)" : "translateX(-100vw)" },
        config: { duration: 1000 }
    })

    return (

        <div className={styles.mainwrapper}>
            <div className={styles.imagewrapper} ref={wrapper}>
                {ifIsInViewport && <animated.img
                    src={src}
                    alt={alt}
                    className={styles.firstimage}
                    style={{ ...test }}
                />}


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