import styles from './Preconditions.module.scss';
import Title from "../../Title/Title";
import TitleSubTitle from './TitleSubTitle/TitleSubTitle';
import ConditionsList from './ConditionsList/ConditionsList';

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
            <TitleSubTitle
                title={title}
                subtitle={subtitle} />
            <ConditionsList
                introsentence={introsentence}
                conditions={conditions}
            />
        </div>
    )
}