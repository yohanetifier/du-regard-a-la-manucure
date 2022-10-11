import Title from '../../../Title/Title';
import styles from './TitleSubTitle.module.scss';

interface Condition {
    sentence: string
}

export interface Props {
    title: string
    subtitle: string
}


export default function TitleSubTitle({ title, subtitle }: Props) {
    return (
        <div className={styles.titlewrapper}>
            <Title className={styles.title}>{title}</Title>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}

