import styles from "./Contact.module.scss";
import img1 from '../../assets/images/ana-francisconi-x-CXDIuhS3c-unsplash.jpg';
import PageTransition from '../PageTransition/PageTransition'; 

function Contact() {
    return (
        <PageTransition>
        <div className={styles.mainwrapper}>
            <figure className={styles.imgwrapper}>
                <img src={img1} alt="" className={styles.img} />
            </figure>
            <div className={styles.contactform}>
                <form className={styles.form}>
                    <div className={styles.titlewrapper}>
                        <h2 className={styles.titleone}>Plus qu'à un doigt...</h2>
                        <h2 className={styles.titletwo}>de la beauté...</h2>
                    </div>
                    <input type="hidden" name="contact_number" className={styles.inputstylesglobal} />
                    <label className={styles.labelglobalstyles}>Nom</label>
                    <input type="text" name="user_name" className={`${styles.inputname} ${styles.inputstylesglobal}`} />
                    <label className={styles.labelglobalstyles}>Email</label>
                    <input type="email" name="user_email" className={`${styles.inputemail} ${styles.inputstylesglobal}`} />
                    <label className={styles.labelglobalstyles}>Message</label>
                    <textarea name="message" className={styles.message} ></textarea>
                    <input type="submit" value="Contactez-moi" className={styles.button} />
                </form>
            </div>
        </div>
        </PageTransition>
    )
}

export default Contact; 