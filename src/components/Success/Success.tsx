import TitleSubTitle from "../Prestations/Preconditions/TitleSubTitle/TitleSubTitle";
import styles from './Success.module.scss';
import eyeBrowsImg from '../../assets/images/amanda-dalbjorn-fvInY-Gh7sc-unsplash.jpg';
import eyeLashesImg from '../../assets/images/engin-akyurt-EeVOgK2x0E4-unsplash.jpg';
import nailsImg from '../../assets/images/pesce-huang-CNMMvIQJS2Y-unsplash.jpg';
import { useState } from 'react';
import Image from "../Image/Image";
import ServiceBar from "../Service/ServiceBar/ServiceBar";
import DisplayImage from "./DisplayImage/DisplayImage";

export default function Success() {
    const [services, setServices] = useState('');
    const [img, setImg] = useState([]);

    const assets = [
        {
            src: eyeBrowsImg,
            categorie: "Sourcils"
        },
        {
            src: eyeBrowsImg,
            categorie: "Sourcils"
        },
        {
            src: eyeBrowsImg,
            categorie: "Sourcils"
        },
        {
            src: eyeLashesImg,
            categorie: "Cils"
        },
        {
            src: eyeLashesImg,
            categorie: "Cils"
        },
        {
            src: eyeLashesImg,
            categorie: "Cils"
        },
        {
            src: nailsImg,
            categorie: "Ongles"
        },
        {
            src: nailsImg,
            categorie: "Ongles"
        },
        {
            src: nailsImg,
            categorie: "Ongles"
        },
    ]

    const nailsImages = assets.filter(item => item.categorie === services)


    return (
        <div className={styles.mainwrapper}>
            <TitleSubTitle
                title="Nos Succes"
                subtitle="Nous savons prendre soin de vous" />
            <ServiceBar
                toggleService={services}
                changeClass={setServices}
            />
            <DisplayImage
                imageAssets={nailsImages}
            />
        </div>
    )
}