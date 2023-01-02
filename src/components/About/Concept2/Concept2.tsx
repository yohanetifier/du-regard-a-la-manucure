import styles from './Concept2.module.scss';
import LayoutThreeImg from './LayoutThreeImg/LayoutThreeImg';
import DescriptionWrapper from "./DescriptionWrapper/DescriptionWrapper";
import { useState } from 'react';

export interface Props {
    src: string
    alt: string
    className?: string
}

export interface Assets {
    assets: Props[]
    description?: string
    title?: string
    setAnimationOver?: (arg: boolean) => void
}

export default function Concept2(props: Assets) {
    const [animationOver, setAnimationOver] = useState(false);

    return (
        <div className={styles.mainwrapper}>
            < LayoutThreeImg
                assets={props.assets}
                setAnimationOver={setAnimationOver}
            />
            <div className={styles.descriptionwrapper}>
                <DescriptionWrapper
                    title={props.title!}
                    description={props.description!}
                    animationOver={animationOver}
                />
            </div>
        </div>
    )
}
