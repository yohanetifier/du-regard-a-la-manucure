import styles from './DescriptionWrapper.module.scss';
import Title from "../../../Title/Title";
import Description from "../../../Description/Description";
import { useState } from 'react';

export interface Props {
    title: string
    description: string
    animationOver?: boolean
}

export default function DescriptionWrapper({ title, description, animationOver }: Props) {
    const [animationOnTitleOver, setAnimationOnTitleOver] = useState(false);

    return (
        <div className={styles.descriptionsubwrapper}>
            <Title
                children={title}
                animationOver={animationOver}
                setAnimationOnTitleOver={setAnimationOnTitleOver}
            />
            <Description
                children={description}
                animationOnTitleOver={animationOnTitleOver}
            />
        </div>
    )
}