import styles from './Certificate.module.scss';
import Title from "../../Title/Title";
import { Assets } from '../Concept2/Concept2';
import Image from '../../Image/Image';
import ImgLayout from './ImgLayout/ImgLayout';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Certificate({ title, assets }: Assets) {
    const wrapper = useRef<HTMLDivElement>(null)
    const isInView = useInView(wrapper, { once: true, amount: 0.5 })
    const MotionTitle = motion(Title);

    return (
        <div className={styles.mainwrapper} ref={wrapper}>
            {isInView &&
                <MotionTitle
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2 }}
                    className={styles.title}
                    children={title!}
                />}
            <ImgLayout
                assets={assets}
                isInView={isInView} />
        </div>
    )
}