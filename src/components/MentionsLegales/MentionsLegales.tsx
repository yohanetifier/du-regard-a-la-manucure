import React from "react";
import styles from "./MentionsLegales.module.scss";
import img from "../../assets/images/oliver-johnson-yH0dth2yEQE-unsplash.jpg";
import SplitContainer from "../SplitContainer/SplitContainer";
import PageTransition from "../PageTransition/PageTransition";

type Props = {
	siteUrl: string;
	editor: string;
	editorAddress: string;
	phoneNumber: string;
	mail: string;
	courrier: string;
};

function MentionsLegales({
	siteUrl,
	editor,
	editorAddress,
	phoneNumber,
	mail,
	courrier,
}: Props) {
	return (
		<PageTransition>
			<SplitContainer img={img} imgAlt={img}>
				<p>
					Conformément aux dispositions sur la loi n 2004-575 du 21
					juin 2004 pour la confiance en l'économie numérique. Il est
					précisé aux utilisatieurs du site duregardalamanucure.com
					l'identité des différents intervenants dans le cadre de sa
					réalisation et de son suivi.
				</p>
				<div>
					<h2 className={styles.title}>Édition du site</h2>
					<p>
						Le présent site, accessible à l'URL
						{siteUrl}
						duregardalamanucure.com est édité par:
					</p>
					<p>
						{editor}
						{editorAddress}
					</p>
				</div>
				<div>
					<h2 className={styles.title}>Hébergement</h2>
					<p></p>
				</div>
				<div>
					<h2 className={styles.title}>Directeur de publication</h2>
					<p>Le directeur de publication du site est Yohan Etifier</p>
				</div>
				<div>
					<h2 className={styles.title}>Nous contacter</h2>
					<p>Par téléphone: {phoneNumber}</p>
					<p>Par email: {mail}</p>
					<p>Par courrier: {courrier}</p>
				</div>
				<div>
					<h2 className={styles.title}>Données personnelles</h2>
					<p>
						Le traitement de vos données à caractère personnel est
					</p>
				</div>
			</SplitContainer>
		</PageTransition>
	);
}

export default MentionsLegales;
