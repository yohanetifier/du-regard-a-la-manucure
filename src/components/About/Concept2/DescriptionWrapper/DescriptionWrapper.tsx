import styles from './DescriptionWrapper.module.scss';
import Title from "../../../Title/Title";
import Description from "../../../Description/Description";
import { useState } from 'react';
import { motion } from 'framer-motion';

export interface Props {
    title: string
    description: string
    animationOver?: boolean
}

export default function DescriptionWrapper({ title, description, animationOver }: Props) {
    const [animationOnTitleOver, setAnimationOnTitleOver] = useState(false);
    const MotionTitle = motion(Title);
    const MotionDescription = motion(Description);

    return (
        <div className={styles.descriptionsubwrapper}>
            {animationOver && <MotionTitle
                children={title}
                animationOver={animationOver}
                onAnimationStart={() => setAnimationOnTitleOver!(true)}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
            />}
            {animationOnTitleOver && <MotionDescription
                children={description}
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
            // animationOnTitleOver={animationOnTitleOver}
            />}
        </div>
    )
}