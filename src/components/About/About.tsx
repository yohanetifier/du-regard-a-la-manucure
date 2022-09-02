import styles from './About.module.scss'; 


function About () {
    return(
      <div className={styles.mainwrapper}>
        <div className={styles.wrapperimg}>
            <img />
        </div>
        <div className={styles.wrapperdescription}>
            <h2>Notre Concept</h2>
            <p>Du regard à la manucure met tout son savoir faire à votre disposition pour vous offrir un regard de star.
                De l'épilation des sourcils, au brow lift, en passant par la teinture des cils et les extensions de cil à cil ou volume russe
                , vivez une véritable expérience sur mesure en magnifiant votre regard pour un résultat du plus naturel
                au plus sophistiqué, qui répondra à votre envie du moment.
            </p>
        </div>
      </div>
    )
}

export default About; 