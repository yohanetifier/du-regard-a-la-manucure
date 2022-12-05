// import styles from './About.module.scss';
import Concept from '../Concept/Concept';
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img2 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img3 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import Concept2 from "./Concept2/Concept2";
import Concept3 from "./Concept3/Concept3";
import Certificate from './Certficate/Certificate';

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
    <div>
      <Concept
        src={img1}
        alt={img1}
        title="Notre Concept"
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
        et en leur appliquant un soin pour un véritable instant cocooning."
      />
      <Certificate
        title="Mes Certificats"
        assets={certificate}
      />
    </div>
  )
}
