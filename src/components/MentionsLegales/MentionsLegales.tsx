import React from "react";
import styles from "./MentionsLegales.module.scss";
import img from "../../assets/images/oliver-johnson-yH0dth2yEQE-unsplash.jpg";
import SplitContainer from "../SplitContainer/SplitContainer";
import PageTransition from "../PageTransition/PageTransition";
import Article from "../Article/Article";

type Props = {
	siteUrl: string;
	editor: string;
	phoneNumber: string;
	mail: string;
	host: string;
	headOffice: string;
};

function MentionsLegales({
	siteUrl,
	editor,
	phoneNumber,
	mail,
	host,
	headOffice,
}: Props) {
	const legalPolicy = [
		{
			title: "Accès au site",
			text: [
				{
					content:
						"L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et toute forme de sollicitation commerciale et notamment l'envoi de courriers électroniques non sollicités.",
				},
			],
		},
		{
			title: "Contenu du site",
			text: [
				{
					content:
						"Toutes les marques, photographies, textes, commentaires, illustations, images animés ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle. Ils sont la propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont strictement interdites. Le fait pour l'éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas accepatation desdites utilisations et renonciation aux poursuites.",
				},
			],
		},
		{
			title: "Gestion du site",
			text: [
				{
					content:
						"Pour la bonne gestion du site, l'éditeur pourra à tout moment :",
				},
				{
					content:
						"- suspendre, interrompre ou limiter l'accàs à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes",
				},
				{
					content:
						"- supprimer toute informations pouvant pertuber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales",
				},
			],
		},
		{
			title: "Édition du site",
			text: [
				{
					content: `Le présent site, accessible à ${siteUrl} est édité par:`,
				},
				{
					content: `${editor}`,
				},
			],
		},
		{
			title: "Photographies et representation des produits",
			text: [
				{
					content:
						"Certaines photographies, accompagnant leur déscription, ne sont pas contractuelles",
				},
			],
		},
		{
			title: "Responsabilités",
			text: [
				{
					content:
						"La responsabilités de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.",
				},
				{
					content:
						"Le matériel de connextion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriés pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet. Vous êtes par ailleurs seul responsable des sites et données que vous consultez.",
				},
				{
					content:
						"L'éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à votre encontre:",
				},
				{
					content:
						"- du fait de l'usage du site ou de tout service accessible via Internet",
				},
				{
					content:
						"- du fait du non-respect par vous des présentes conditions générales",
				},
				{
					content:
						"L'éditeur n'est pas resposnsable des dommages causés à vous mêmes, à des tiers et/ou à votre équipement du fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait.",
				},
				{
					content:
						"Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire en raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure",
				},
			],
		},
		{
			title: "Liens hypertextes",
			text: [
				{
					content:
						"La mise en place par les utilisateurs de tous les liens hypertextes vers tout ou partie du site",
				},
				{
					content:
						"Toute information accessible via un lien vers d'autres sites n'est pas publiée par l'éditeur. L'éditeur ne dispose d'aucun droit sur le contenu présent dans lédit lien",
				},
			],
		},
		{
			title: "Hébergement",
			text: [
				{
					content:
						"Le site est hébergé par Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789 USA",
				},
			],
		},
		{
			title: "Directeur de publication",
			text: [
				{
					content: `Le directeur de publication du site est ${editor}`,
				},
			],
		},
		{
			title: "Nous contacter",
			text: [
				{
					content:
						"Pour toute question, information sur les produits présentés sur le site, ou concernant le site lui même, vous pouvez nous contacter par le biais des moyens suivants",
				},
				{
					content: `Par téléphone: ${phoneNumber}`,
				},
				{
					content: `Par email: ${mail}`,
				},
			],
		},
	];
	return (
		<PageTransition>
			<SplitContainer img={img} imgAlt={img}>
				<p>
					Conformément aux dispositions sur la loi n 2004-575 du 21
					juin 2004 pour la confiance en l'économie numérique. Il est
					précisé aux utilisatieurs du site {siteUrl} l'identité des
					différents intervenants dans le cadre de sa réalisation et
					de son suivi.
				</p>
				{legalPolicy.map(({ title, text }) => (
					<Article title={title} text={text} />
				))}
			</SplitContainer>
		</PageTransition>
	);
}

export default MentionsLegales;
