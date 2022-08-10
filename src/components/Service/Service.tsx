import Banner from '../Banner/Banner';
import Image from '../Image/Image';
import styles from './Service.module.scss';
import ServiceBar from '../ServiceBar/ServiceBar';
import imgTopNails from '../../assets/images/designecologist-r-Ej0NQmFlQ-unsplash.jpg';
import defaultImgBottom from '../../assets/images/sour-moha-k47viB7Dt8I-unsplash.jpg';
import defaultImgTop from '../../assets/images/billie-5OXE3KjDEfI-unsplash.jpg';
import imgBottomNails from '../../assets/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg';
import imgTopEyebrows from '../../assets/images/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg';
import imgBottomEyebrows from '../../assets/images/gabe-pierce-_wK8VnF5yao-unsplash.jpg';
import imgTopEyelashes from '../../assets/images/sharon-mccutcheon-y_VhmHCZ8FY-unsplash.jpg';
import imgBottomEyelashes from '../../assets/images/hayley-kim-design-sRSRuxkOuzI-unsplash.jpg';
import { beautyOfHands } from './ServiceCard/BeautyOfNails/BeautyOfHands';
import { beautyOfFoot } from './ServiceCard/BeautyOfNails/BeautyOfFoot';
import { beautyOfEyebrows } from './ServiceCard/beautyOfEyebrows';
import { beautyOfEyelashes } from './ServiceCard/beautyOfEyelashes';
import { useState } from 'react';

interface Props {
    img: string
}

export default function Service({ img }: Props) {
    const [changeService, setChangeService] = useState<string>('');
    const [image, setImage] = useState<string>('');

   

    return (
        <div>
            <Banner src={img} className={styles.img} classNamewrapper={styles.wrapper} />
            <ServiceBar classnamemainwrapper={styles.mainwrapper} classnametitlewrapper={styles.titlewrapper} changeClass={(changeService: string) => setChangeService(changeService)} />
          {!changeService ?   (
            <div className={styles.wrappercenter}>
                <div className={styles.wrapperimgbottom}>
                    <img src={defaultImgBottom} alt="" className={styles.img}/>
                </div>
                <h1 className={styles.layoutitle}>De la beauté du regard</h1>
                <div className={styles.wrapperimgtop}>
                    <img src={defaultImgTop} alt="" className={styles.img}/>
                </div>
            </div>
          ) : (
            <div className={styles.wrappercenter}>
            <div className={styles.price}>
                <div className={changeService === 'Ongles' ? `${styles.ongles} ${styles.actif}` : `${styles.ongles}`}>
                    <h2>Beauté des mains</h2>
                    <ul>
                        {beautyOfHands.map(({ service, price }) => (
                            <div className={styles.beautywrapper}>
                                <li>{service}</li>
                                <span className={styles.bold}>{price}</span>
                            </div>
                        ))}
                    </ul>
                    <h2>Beauté des pieds</h2>
                    <ul>
                        {beautyOfFoot.map(({ service, price }) => (
                            <div className={styles.beautywrapper}>
                                <li>{service}</li>
                                <span className={styles.bold}>{price}</span>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className={changeService === 'Sourcils' ? `${styles.sourcils} ${styles.actif}` : `${styles.sourcils}`}>
                <h2>Beauté du regard</h2>
                <ul>
                        {beautyOfEyebrows.map(({ service, price }) => (
                            <div className={styles.beautywrapper}>
                                <li>{service}</li>
                                <span className={styles.bold}>{price}</span>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className={changeService === 'Cils' ? `${styles.cils} ${styles.actif}` : `${styles.cils}`}>
                    <h2>Beauté du regard</h2>
                <ul>
                        {beautyOfEyelashes.map(({ service, price }) => (
                            <div className={styles.beautywrapper}>
                                <li>{service}</li>
                                <span className={styles.bold}>{price}</span>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <Image src={changeService === 'Ongles' ? imgTopNails : changeService === 'Cils' ? imgTopEyelashes : changeService === 'Sourcils' ? imgTopEyebrows : ""} alt={""} classNamewrapper={styles.imgtopright} />
            <Image src={changeService === 'Ongles' ? imgBottomNails : changeService === 'Cils' ? imgBottomEyelashes : changeService === 'Sourcils' ? imgBottomEyebrows : ""}  alt={""} classNamewrapper={styles.imgbottomright} />
        </div>
          )}
            {/* <div className={styles.wrappercenter}>
                <div className={styles.price}>
                    <div className={changeService === 'Ongles' ? `${styles.ongles} ${styles.actif}` : `${styles.ongles}`}>
                        <h2>Beauté des mains</h2>
                        <ul>
                            {beautyOfHands.map(({ service, price }) => (
                                <div className={styles.beautywrapper}>
                                    <li>{service}</li>
                                    <span className={styles.bold}>{price}</span>
                                </div>
                            ))}
                        </ul>
                        <h2>Beauté des pieds</h2>
                        <ul>
                            {beautyOfFoot.map(({ service, price }) => (
                                <div className={styles.beautywrapper}>
                                    <li>{service}</li>
                                    <span className={styles.bold}>{price}</span>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className={changeService === 'Sourcils' ? `${styles.sourcils} ${styles.actif}` : `${styles.sourcils}`}>
                    <h2>Beauté du regard</h2>
                    <ul>
                            {beautyOfEyebrows.map(({ service, price }) => (
                                <div className={styles.beautywrapper}>
                                    <li>{service}</li>
                                    <span className={styles.bold}>{price}</span>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className={changeService === 'Cils' ? `${styles.cils} ${styles.actif}` : `${styles.cils}`}>
                        <h2>Beauté du regard</h2>
                    <ul>
                            {beautyOfEyelashes.map(({ service, price }) => (
                                <div className={styles.beautywrapper}>
                                    <li>{service}</li>
                                    <span className={styles.bold}>{price}</span>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <Image src={changeService === 'Ongles' ? imgTopNails : changeService === 'Cils' ? imgTopEyelashes : changeService === 'Sourcils' ? imgTopEyebrows : ""} alt={""} classNamewrapper={styles.imgtopright} />
                <Image src={changeService === 'Ongles' ? imgBottomNails : changeService === 'Cils' ? imgBottomEyelashes : changeService === 'Sourcils' ? imgBottomEyebrows : ""}  alt={""} classNamewrapper={styles.imgbottomright} />
            </div> */}
        </div>
    )
}