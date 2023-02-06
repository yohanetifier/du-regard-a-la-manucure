import styles from "./Contact.module.scss";
import img1 from "../../assets/images/ana-francisconi-x-CXDIuhS3c-unsplash.jpg";
import PageTransition from "../PageTransition/PageTransition";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
	const form = useRef(null);
	const sendEmail = (e: any) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_0cr6rxf",
				"template_6xhehs4",
				form.current!,
				"fbrv8cGHWqbRIdbOA"
			)
			.then(
				(result: any) => {
					console.log(result.text);
					alert("mail sent");
				},
				(error: any) => {
					console.log(error.text);
					alert("mail not sent");
				}
			);
	};
	return (
		<PageTransition>
			<div className={styles.mainwrapper}>
				<figure className={styles.imgwrapper}>
					<img src={img1} alt="" className={styles.img} />π
				</figure>
				<div className={styles.contactForm}>
					<form
						className={styles.form}
						ref={form}
						onSubmit={sendEmail}
					>
						<div className={styles.titlewrapper}>
							<h2 className={styles.titleone}>
								Plus qu'à un doigt de la beauté...
							</h2>
						</div>
						<div className={styles.spaceInput}>
							<div className={styles.inputWrapper}>
								<input
									type="text"
									name="user_name"
									className={`${styles.inputname} ${styles.inputstylesglobal}`}
									placeholder="Nom"
									required={true}
									pattern="^([a-zA-Z]{3,6})[-]?([a-zA-Z]{3,6})?"
								/>
							</div>
							<div className={styles.inputWrapper}>
								<input
									type="email"
									name="user_email"
									className={`${styles.inputemail} ${styles.inputstylesglobal}`}
									placeholder="Email"
									pattern="^[a-zA-Z\d-_.+]{0,}[-_.+]{0,}[a-zA-Z]{0,}@[a-zA-Z]{3,10}\.[a-zA-Z]{2,6}"
									required={true}
								/>
							</div>
							<div
								className={`${styles.inputWrapper} ${styles.textAreaWrapper}`}
							>
								<textarea
									name="message"
									className={`${styles.inputstylesglobal} ${styles.textArea}`}
									placeholder="Message"
									required={true}
								></textarea>
							</div>
							<input
								type="submit"
								value="Contactez-moi"
								className={styles.button}
							/>
						</div>
					</form>
				</div>
			</div>
		</PageTransition>
	);
}

export default Contact;
