import Sentence from '../Sentence/Sentence'
import styles from './FirstSection.module.scss'

interface Phrase {
    phrase: string
}

const sentence: Phrase[] = [
    {
        phrase: "La beauté jusqu'au bout des ongles"
    },
    {
        phrase: "Your nails say everything about you"
    },
    {
        phrase: "La beauté ne fait pas l'amour c'est l'amour qui fait la beauté"
    },
    {
        phrase: "La vie n'est pas toujours parfaite vos ongles, SI!"
    },
    {
        phrase: "Your nails say everything about you"
    },
]

function FirstSection() {
    return (
        <div className={styles.mainwrapper}>
            <ul className={styles.wrapper}>
                {sentence.map(({ phrase }) => (
                    <li className={styles.list}>
                        <Sentence phrase={phrase} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FirstSection; 