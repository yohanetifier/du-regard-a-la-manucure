// import styles from './About.module.scss';
import Concept from '../Concept/Concept';
import img from '../../assets/images/PHOTO-2022-12-31-12-21-07.jpg';
import img1 from '../../assets/images/PHOTO-2022-12-31-12-41-05.jpg';
import img2 from '../../assets/images/PHOTO-2022-12-31-12-39-16.jpg';
import img3 from '../../assets/images/PHOTO-2022-12-31-12-41-28.jpg';
import img4 from '../../assets/images/PHOTO-2022-12-31-12-34-35.jpg';
import img5 from '../../assets/images/PHOTO-2022-12-31-12-47-08.jpg';
import img6 from '../../assets/images/PHOTO-2022-12-31-12-29-08.jpg';
import Concept2 from "./Concept2/Concept2";
import Concept3 from "./Concept3/Concept3";
import Certificate from './Certficate/Certificate';
import { motion } from "framer-motion";
import PageTransition from '../PageTransition/PageTransition';

export default function About() {

  const imgConcept2 = [
    {
      src: img1,
      alt: img1,
      className: "firstimg"
    },
    {
      src: img2,
      alt: img2,
      className: "secondimg",
    },
    {
      src: img3,
      alt: img3,
      className: "thirdimg",
    },
  ]

  const imgConcept3 = [
    {
      src: img4,
      alt: img4,
      className: "firstimg"
    },
    {
      src: img5,
      alt: img5,
      className: "secondimg",
    },
    {
      src: img6,
      alt: img6,
      className: "thirdimg",
    },
  ]

  const certificate = [
    {
      src: img3,
      alt: img3,
      className: "firstimg",
    },
    {
      src: img3,
      alt: img3,
      className: "secondimg",
    },
    {
      src: img3,
      alt: img3,
      className: "thirdimg",
    },
    {
      src: img3,
      alt: img3,
      className: "fourthimg",
    },
    {
      src: img3,
      alt: img3,
      className: "fifthimg",
    },
  ]

  return (
    <PageTransition>
      <Concept
        src={img}
        alt={img}
        title="Parlons un peu de nous"
        children="Du regard à la manucure met tout son savoir faire à votre disposition pour vous offrir un regard de star.
      De l'épilation des sourcils, au brow lift, en passant par la teinture des cils et les extensions de cil à cil ou volume russe
      , vivez une véritable expérience sur mesure en magnifiant votre regard pour un résultat du plus naturel
      au plus sophistiqué, qui répondra à votre envie du moment."
        to="/prestations"
        label="Nos prestations"
        numberOfButton="two"
        secondTo="/services"
        secondLabel="Nos services"
      />
      <Concept2
        assets={imgConcept2}
        title="Du Regard à la Manucure"
        description="Parce que vos mains et vos pieds ont besoin d'être chouchouté comme ils le méritent. Du regard à la Manucure propose aussi des soins complets à domicile.
        Elle réalise, entre autres, la pose de gel X, une technique de pose de faux ongles, pour arborer des mains féminines et soignées pendant plusieurs semaines.
        Vous pourrez aussi bénéficier de la pose d'un vernis semi-permanent, d'un baby boomer, d'une french ou craquer pour le nail art ou l'incrustation pour donner une touche
        esthétique et originale à vos ongles. Et quelle que soit la prestation choisie, la manucure russe est offerte."
      />
      <Concept3
        assets={imgConcept3}
        description="Grace à son activité à domicile, Du regard à la Manucure, peut bichonner également vos pieds en les sublimant d'un beau vernis semi-permanent ou classique 
        et en leur appliquant un soin pour un véritable instant cocooning. Que vous souhaitez apporter de la couleur à vos ongles, renforcer et embellir vos ongles naturels ou tout simplement apporter une touche d'originalité en les habillant d'un Nail art unique (décoration sur ongle), pailettes, strass, toutes les folies sont permises et vos ongles deviennent des bijoux ! "
      />
      <Certificate
        title="Mes Certificats"
        assets={certificate}
      />
    </PageTransition>
  )
}
