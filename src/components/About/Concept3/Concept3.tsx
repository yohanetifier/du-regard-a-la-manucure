import styles from './Concept3.module.scss';
import Image from "../../Image/Image";
import Description from '../../Description/Description';
import { Props } from "../Concept2/Concept2";
import { Assets } from "../Concept2/Concept2";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';


export default function Concept3(props: Assets) {
    const wrapper = useRef(null);
    const isInView = useInView(wrapper, { once: true });
    const [animationOver, setAnimationOver] = useState(false);

    return (
        <div className={styles.mainwrapper} ref={wrapper}>
            {props.assets.map(({ src, alt, className }) => (
                <>
                    <Image
                        src={src}
                        alt={alt}
                        classNamewrapper={`${styles[className!]}`}
                        animation={true}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 7 }}
                        onAnimationComplete={() => setAnimationOver(true)}
                    />
                </>
            ))}
            <Description
                children={props.description!}
                className={styles.description}
                animationOnTitleOver={animationOver}
            />
        </div>
    )
}
