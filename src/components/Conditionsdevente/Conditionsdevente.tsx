import styles from './Conditionsdevente.module.scss'; 
// import img from '../../assets/images/billie-k2vn6he4lDQ-unsplash.jpg'; 
import img from '../../assets/images/marcus-lewis-csKAiMU1OrU-unsplash.jpg'; 

function ConditionsDeVente () {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.wrapperimg}>
                <img src={img} alt="" className={styles.img}/>
            </div>
            <div className={styles.wrapperinfos}>
                {/* zone infos */}
                <h1 className={styles.title}>Infos</h1>
                <ul>
                    <li>Veuillez m'envoyer un message privé avec vos disponibilités / la prestation que vous souhaitez / une photo de vos ongles / vos coordonnées (nom, prénom, téléphone)</li>
                    <li>Les remplissages extérieures ne sont pas possible, la dépose sera donc ajoutée au tarif de la prestation choisie</li>
                    <li>Un acompte de 30% sera demander pour valider la prise de rendez-vous</li>
                    <li>Veuillez confirmer votre rendez-vous la veille</li>
                    <li>Les paiements se feront uniquement par paypal ou espèces</li>
                    <li>Je me déplace à domicile donc merci de prévoir l'espace nécessaire pour mon matériel (table manucure / table de massage)</li>
                    <li>Merci d'être précise au maximum pour la prestation que vous voulez pour vos ongles ou couleur car je ne pourrais pas transporter tout mes vernis</li>
                    <li>Un supplément de 10€ sera demandé pour toutes prestations le dimanche et les jours fériés</li>
                </ul>
            </div>
        </div>
    )
}

export default ConditionsDeVente; 