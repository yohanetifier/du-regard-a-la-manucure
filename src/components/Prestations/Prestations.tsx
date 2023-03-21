import styles from "./Prestations.module.scss";
import ServiceDescription from "./ServiceDescription/ServiceDescription";
import img1 from "../../assets/images/IMG_3104.jpg";
import VernisSemiPermanent from "../../assets/images/IMG_60821.jpeg";
import Gainage from "../../assets/images/gainage.jpg";
import RehaussementDeCils from "../../assets/images/IMG_3104.jpg";
import PoseAmericaine from "../../assets/images/52F9835B-903C-4B09-B0B4-615A45FC9386.jpg";
import Renforcement from "../../assets/images/IMG_5413.jpeg";
import Preconditions from "./Preconditions/Preconditions";
import PageTransition from "../PageTransition/PageTransition";

export default function Prestation() {
	const service = [
		{
			src: VernisSemiPermanent,
			alt: VernisSemiPermanent,
			title: "Vernis Semi Permanent",
			description:
				"Cette pose est l'alternative entre une pose en gel uv et une pose de vernis classique, elle est possible sur les ongles naturels des mains et des pieds avec un renforcement, ce qui permet d'avoir des ongles plus résistants aux chocs et donc une tenue plus longue qu'un vernis ordinaire. Le vernis semi-permanent peut être complété avec une décoration ou Nail art. Sa tenue est de 3 semaines sans entretien, voire plus 4 à 5 semaines au niveau des pieds.",
		},
		{
			src: Renforcement,
			alt: Renforcement,
			title: "Le Renforcement",
			description:
				"Le renforcement reste le plus naturel. C'est tout simplement une pose de semi permanent mais renforcée avec une basse épaisse (rubber base) sur ongles courts uniquement sinon on parlera de gainage. On créer une mini construction avec cette base pour garantir une pose solide et durable dans le temps. Idéal pour les personnes souhaitant garder leur longueur naturelle, renforcer et faire pousser leurs ongles sans les casser. Il est nécessaire de faire un remplissage entre 3 et 4 semaines.",
		},
		{
			src: Gainage,
			alt: Gainage,
			title: "Le Gainage",
			description:
				"Le gainage est une pose de gel sur ongles naturels et sur votre longueur actuelle (sans rallongement). Cette pose permet le renforcement de vos ongles.",
		},
		{
			src: PoseAmericaine,
			alt: PoseAmericaine,
			title: "La Pose Americaine",
			description:
				"La pose Américaine, aussi connue sous le nom de 'Gel X' vise à coller des capsules en gel avec un gel flexible sur la totalité de l'ongle naturel. Celle ci est déjà préformée au niveau du bombé, de la forme et de la longueur mais elle peut être ajustée selon les envies de la cliente. Cette technique est aussi solide que du gel de construction. Ne s'adapte pas au ongles très bombés / crochu. Une Dépose et pose sera a effectuer entre 3 et 4 semaines.",
		},
		// {
		//     src: img1,
		//     alt: img1,
		//     title: "La Depose",
		//     description: "La dépose consiste à retirer le gel , le semi permanent , le Gel X posé sur l'ongle au cas où la cliente souhaite arrêter. Un soin adapté sera appliqué après la dépose."
		// },
		// {
		//     src: img1,
		//     alt: img1,
		//     title: "Le Remplissage",
		//     description: "Les ongles des mains poussent de 3 à 5 millimètres par mois, l’ongle naturel continue à pousser faisant ainsi avancer le gel. Pour combler l'espace vide entre l'ongle naturel et le faux ongle, il faudra effectuer un 'remplissage', en général entre 3 et 4 semaines de repousse. Lors de ce remplissage, la cliente peut choisir de changer la forme, le style, la couleur ainsi que la décoration de ses ongles."
		// },
		{
			src: RehaussementDeCils,
			alt: RehaussementDeCils,
			title: "Le Rehaussement de Cils",
			description:
				"Le rehaussement de cils est un traitement innovant qui permet de rehausser vos cils naturels mais aussi de les réparer, les nourrir et les renforcer. Il permet d’avoir un regard éclatant sans extensions de cils",
		},
	];

	const conditions = [
		{
			sentence:
				"Les jeunes de moins de 16 ans : ongles pas assez matures et risque plus élevé de malformation de l’ongle.",
		},
		{
			sentence:
				"Les personnes sous traitement médicamenteux aux stéroïdes ou traitement antibiotique prolongé : problème d’adhérence des produits.",
		},
		{
			sentence:
				"En cas de maladie de l’ongle, par exemple mycose, pour éviter toute contamination.",
		},
		{
			sentence: " Les personnes allergiques aux produits.",
		},
		{
			sentence:
				"Mais aussi au-delà du 7ème mois de grossesse ou en cas d’intervention chirurgicale proche.",
		},
		{
			sentence:
				"Veuillez m'envoyer un message privé avec vos disponibilités / la prestation que vous souhaitez / une photo de vos ongles / vos coordonnées (nom, prénom, téléphone)",
		},
		{
			sentence:
				"Les remplissages extérieures ne sont pas possible, la dépose sera donc ajoutée au tarif de la prestation choisie",
		},
		{
			sentence:
				"Un acompte de 30% sera demander pour valider la prise de rendez-vous",
		},
		{
			sentence: "Veuillez confirmer votre rendez-vous la veille",
		},
		{
			sentence:
				"Les paiements se feront uniquement par paypal ou espèces",
		},
		{
			sentence:
				"Je me déplace à domicile donc merci de prévoir l'espace nécessaire pour mon matériel (table manucure / table de massage)",
		},
		{
			sentence:
				"Merci d'être précise au maximum pour la prestation que vous voulez pour vos ongles ou couleur car je ne pourrais pas transporter tout mes vernis",
		},
		{
			sentence:
				"Un supplément de 10€ sera demandé pour toutes prestations le dimanche et les jours fériés",
		},
	];

	return (
		<PageTransition>
			<ServiceDescription assets={service} />
			<Preconditions
				title="Les conditions prealables"
				subtitle="La pose de faux ongles n'est pas anodine, faites appel à une professionnelle qualifiée !"
				introsentence="Du regard à la manucure refuse: "
				conditions={conditions}
			/>
			{/* </div> */}
		</PageTransition>
	);
}
