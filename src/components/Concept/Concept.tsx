import Image from '../Image/Image';
import styles from './Concept.module.scss';
import Button from "../Button/Button";
import { CSSTransition } from "react-transition-group";
import useIntersection from "../UseIntersection/UseIntersection";
import { useRef, useState } from "react";

export interface Img {
    src: string
    alt: string
    classNamewrapper?: string
    ref?: HTMLElement
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
    const [state, setState] = useState(false);
    // const wrapperDescription = useRef<null>(null);
    const ifIsInViewport = useIntersection(wrapper, 0.5);

    function changeValue() {
        setTimeout(() => {
            setState(true)
        }, 10000)
    }
    changeValue();
    // console.log("ifIsInViewport", ifIsInViewport)
    // const translationByTheLeft = useSpring({
    //     from: { transform: "translateX(-100vw)" },
    //     to: { transform: ifIsInViewport ? "translateX(0px)" : "translateX(-100vw)" },
    //     config: { duration: 1000 }
    // })

    // const translationByTheRight = useSpring({
    //     from: { transform: "translateX(100vw)" },
    //     to: { transform: ifIsInViewport ? 'translateX(0px)' : "translateX(100vw)" },
    //     config: { duration: 1000 }
    // })

    return (

        <div className={styles.mainwrapper} >
            <div className={styles.imagewrapper} ref={wrapper}>
                < CSSTransition
                    in={ifIsInViewport}
                    timeout={1000}
                    classNames={{
                        enterActive: styles.testEnterActive,
                        enterDone: styles.testEnterDone,
                        exitActive: styles.ExitActive,
                        exitDone: styles.testExitDone
                    }}
                >
                    <img
                        src={src}
                        alt={alt}
                        className={styles.test}
                    // className="test"
                    />
                </CSSTransition>



            </div>
            <div className={styles.descriptionwrapper} >
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