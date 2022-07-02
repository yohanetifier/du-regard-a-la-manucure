import styles from './Sentence.module.scss'

interface Title {
    phrase: string
}

function Sentence({ phrase}: Title) {
    return (
        <h2 className={styles.sentence}>{phrase}</h2>
    )
}

export default Sentence; 