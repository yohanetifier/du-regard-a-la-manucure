import Title from "../../../Title/Title";
import styles from './TextWrapper.module.scss';
import { Props } from "../../../About/Concept2/DescriptionWrapper/DescriptionWrapper";


export default function TextWrapper({ title, description }: Props) {
    return (
        <div className={styles.descriptionwrapper}>
            <div className={styles.descriptionsubwrapper}>
                <Title>{title}</Title>
                <p>{description}</p>
            </div>
        </div>
    )
}