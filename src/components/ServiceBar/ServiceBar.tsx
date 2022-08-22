import styles from './ServiceBar.module.scss'; 

interface Props {
    classnamemainwrapper: string
    classnametitlewrapper: string
    changeClass?: any
    toggleService: string
}

export default function ServiceBar({ classnamemainwrapper, classnametitlewrapper, changeClass, toggleService }: Props) {
    return (
        <div className={classnamemainwrapper}>
            <div className={classnametitlewrapper}>
                <div className={toggleService === "Ongles" ? `${styles.actif} ${styles.default}` : `${styles.inactif} ${styles.default}`}>
                    <h2 className={styles.title} onClick={() => changeClass("Ongles")}>Ongles</h2>
                    </div>
                    <div className={toggleService === "Sourcils" ? `${styles.actif} ${styles.default}` : `${styles.inactif} ${styles.default}`}>
                    <h2 className={styles.title} onClick={() => changeClass("Sourcils")}>Sourcils</h2>
                    </div>
                    <div className={toggleService === "Cils" ? `${styles.actif} ${styles.default}` : `${styles.inactif} ${styles.default}`}>
                    <h2 className={styles.title} onClick={() => changeClass("Cils")}>Cils</h2>
                    </div>
            </div>
        </div>
    )
}