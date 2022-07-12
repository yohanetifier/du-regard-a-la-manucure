import Image from '../Image/Image';
import img1 from '../../assets/images/engin-akyurt-EeVOgK2x0E4-unsplash.jpg';
import styles from './Concept.module.scss';
import Title from '../Title/Title'
import Description from '../Description/Description';

export interface Img {
    src: string
    alt: string
    className: string
}

const image = [
    {
        src: img1,
        alt: img1,
        className: 'first-image'
    },
]

function Concept() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.imagewrapper}>
                {image.map(({ src, alt, className }) => (
                    <Image src={src} alt={alt} className={className} />
                ))}
            </div>
            <div className={styles.descriptionwrapper}>
                <div className={styles.layoutwrapper}>
                    <Title className={styles.title}> Militibus muro et circumstetere inedia.</Title>
                    <Description className={styles.description}>
                        Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus fiducia
                        vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.
                        Quod cum ita sit, paucae domus studiorum seriis cultibus antea celebratae nunc ludibriis ignaviae torpentis exundant, vocali sonu, perflabili tinnitu fidium resultantes.
                        denique pro philosopho cantor et in locum oratoris doctor artium ludicrarum accitur et bybliothecis sepulcrorum ritu in perpetuum clausis organa fabricantur hydraulica, et
                        lyrae ad speciem carpentorum ingentes tibiaeque et histrionici gestus instrumenta non levia.
                        Nunc vero inanes flatus quorundam vile esse quicquid extra urbis pomerium nascitur aestimant praeter orbos et caelibes, nec credi potest qua obsequiorum diversitate
                        coluntur homines sine liberis Romae.</Description>
                </div>
            </div>
        </div>
    )
}

export default Concept; 