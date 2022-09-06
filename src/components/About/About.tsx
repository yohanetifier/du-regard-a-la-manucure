import styles from './About.module.scss';
import Concept from '../Concept/Concept';
import img1 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import img2 from '../../assets/images/clay-banks-_3Sud4WPPYE-unsplash.jpg';
import Concept2 from "../Concept2/Concept2";
import Concept3 from "./Concept3/Concept3";

function About() {

  const img = [
    {
      src: img1,
      alt: img1,
      classname: styles.firstimg,
    },
    {
      src: img2,
      alt: img2,
      classname: styles.secondimg,
    }
  ]

  return (
    <>
      <Concept
        src={img1}
        alt={img1}
        title="Notre Concept"
        children="Du regard à la manucure met tout son savoir faire à votre disposition pour vous offrir un regard de star.
      De l'épilation des sourcils, au brow lift, en passant par la teinture des cils et les extensions de cil à cil ou volume russe
      , vivez une véritable expérience sur mesure en magnifiant votre regard pour un résultat du plus naturel
      au plus sophistiqué, qui répondra à votre envie du moment."
        to="/nos-prestations"
        label="Nos prestations"
        numberOfButton="two"
        secondTo="/services"
        secondLabel="Nos services"
      />
      <Concept2
      />
      <Concept3
        assets={img}
      />
    </>
  )
}

export default About; 