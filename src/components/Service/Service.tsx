import { useContext, useState } from 'react';
import Banner from '../Banner/Banner';
import Image from '../Image/Image';
import styles from './Service.module.scss';
import ServiceBar from './ServiceBar/ServiceBar';
import imgTopNails from '../../assets/images/jesse-donoghoe-2aiP_wxNrfU-unsplash.jpg';
import defaultImgBottom from '../../assets/images/sour-moha-k47viB7Dt8I-unsplash.jpg';
import defaultImgTop from '../../assets/images/billie-5OXE3KjDEfI-unsplash.jpg';
import imgBottomNails from '../../assets/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg';
import imgTopEyebrows from '../../assets/images/amanda-dalbjorn-fvInY-Gh7sc-unsplash.jpg';
import imgBottomEyebrows from '../../assets/images/gabe-pierce-_wK8VnF5yao-unsplash.jpg';
import imgTopEyelashes from '../../assets/images/PHOTO-2022-12-31-13-01-03.jpg';
import imgBottomEyelashes from '../../assets/images/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg';
import { beautyOfHands } from './ServiceCard/BeautyOfNails/BeautyOfHands';
import { beautyOfFoot } from './ServiceCard/BeautyOfNails/BeautyOfFoot';
import { beautyOfEyebrows } from './ServiceCard/beautyOfEyebrows';
import { beautyOfEyelashes } from './ServiceCard/beautyOfEyelashes';
import PageTransition from '../PageTransition/PageTransition';
import { SelectedService } from '../App/App';

interface Props {
    img: string
}

export default function Service({ img }: Props) {
    const choosenService = useContext(SelectedService);
    // const [changeService, setChangeService] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const { selectedService, setSelectedService } = choosenService;
    console.log('selectedService', selectedService);
    console.log('setSelectedService', setSelectedService);



    return (
        <PageTransition>
            <Banner src={img} className={styles.img} classNamewrapper={styles.wrapper} />
            <ServiceBar
                toggleService={selectedService}
                changeClass={(selectedService: string) => setSelectedService(selectedService)}
            />
            {!selectedService ? (
                <div className={styles.wrappercenter}>
                    <div className={styles.wrapperimgbottom}>
                        <img src={defaultImgBottom} alt="" className={styles.img} />
                    </div>
                    <h1 className={styles.layoutitle}>De la beauté du regard</h1>
                    <div className={styles.wrapperimgtop}>
                        <img src={defaultImgTop} alt="" className={styles.img} />
                    </div>
                </div>
            ) : (
                <div className={styles.wrappercenter}>
                    <div className={styles.price}>
                        <div className={selectedService === 'Ongles' ? `${styles.ongles} ${styles.actif}` : `${styles.ongles}`}>
                            <h2 className={styles.subtitle}>Beauté des mains</h2>
                            <ul>
                                {beautyOfHands.map(({ service, price }) => (
                                    <div className={styles.beautywrapper}>
                                        <li>{service}</li>
                                        <span className={styles.bold}>{price}</span>
                                    </div>

                                ))}
                            </ul>
                            <div className={styles.test}>
                                <h2 className={styles.subtitle}>Beauté des pieds</h2>
                                <ul>
                                    {beautyOfFoot.map(({ service, price }) => (
                                        <div className={styles.beautywrapper}>
                                            <li>{service}</li>
                                            <span className={styles.bold}>{price}</span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={selectedService === 'Sourcils' ? `${styles.sourcils} ${styles.actif}` : `${styles.sourcils}`}>
                            <h2 className={styles.subtitle}>Beauté du regard</h2>
                            <ul>
                                {beautyOfEyebrows.map(({ service, price }) => (
                                    <div className={styles.beautywrapper}>
                                        <li>{service}</li>
                                        <span className={styles.bold}>{price}</span>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className={selectedService === 'Cils' ? `${styles.cils} ${styles.actif}` : `${styles.cils}`}>
                            <h2 className={styles.subtitle}>Beauté du regard</h2>
                            <ul className={styles.listofservice}>
                                {beautyOfEyelashes.map(({ service, price }) => (
                                    <div className={styles.beautywrapper}>
                                        <li>{service}</li>
                                        <span className={styles.bold}>{price}</span>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={selectedService === 'Ongles' ? `${styles.foot} ${styles.actif}` : `${styles.ongles}`}>
                        <h2 className={styles.subtitle}>Beauté des pieds</h2>
                        <ul>
                            {beautyOfFoot.map(({ service, price }) => (
                                <div className={styles.beautywrapper}>
                                    <li>{service}</li>
                                    <span className={styles.bold}>{price}</span>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <Image src={selectedService === 'Ongles' ? imgTopNails : selectedService === 'Cils' ? imgTopEyelashes : selectedService === 'Sourcils' ? imgTopEyebrows : ""} alt={""} classNamewrapper={styles.imgtopright} />
                    <Image src={selectedService === 'Ongles' ? imgBottomNails : selectedService === 'Cils' ? imgBottomEyelashes : selectedService === 'Sourcils' ? imgBottomEyebrows : ""} alt={""} classNamewrapper={styles.imgbottomright} />
                </div>
            )}
        </PageTransition>
    )
}