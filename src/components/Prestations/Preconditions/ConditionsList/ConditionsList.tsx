import styles from './ConditionsList.module.scss';

interface Condition {
    sentence: string
}
interface Props {
    introsentence: string
    conditions: Condition[]
}

export default function ConditionsList({ introsentence, conditions }: Props) {
    return (
        <div className={styles.conditionwrapper}>
            <h3 className={styles.introsentence}>{introsentence}</h3>
            <ul>
                {conditions.map(({ sentence }) => (
                    <li>{sentence}</li>
                ))}

            </ul>
        </div>
    )
}