import styles from './Preconditions.module.scss';
import Title from "../../Title/Title";

interface Condition {
    sentence: string
}
interface Props {
    title: string
    subtitle: string
    introsentence: string
    conditions: Condition[]
}

export default function Preconditions({ title, subtitle, introsentence, conditions }: Props) {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.titlewrapper}>
                <Title className={styles.title}>{title}</Title>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.conditionwrapper}>
                <h3>{introsentence}</h3>
                <ul>
                    {conditions.map(({ sentence }) => (
                        <li>{sentence}</li>
                    ))}

                </ul>
            </div>
        </div>
    )
}