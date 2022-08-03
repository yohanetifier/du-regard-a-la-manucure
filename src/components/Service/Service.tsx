import Banner from '../Banner/Banner';
import Image from '../Image/Image';
import styles from './Service.module.scss';
import ServiceBar from '../ServiceBar/ServiceBar';
import imgtopright from '../../assets/images/autumn-goodman-vTL_qy03D1I-unsplash.jpg';
import imgbottomright from '../../assets/images/ana-francisconi-x-CXDIuhS3c-unsplash.jpg';

interface Props {
    img: string
}

export default function Service({ img }: Props) {
    return (
        <div>
            <Banner src={img} className={styles.img} classNamewrapper={styles.wrapper} />
            <ServiceBar classnamemainwrapper={styles.mainwrapper} classnametitlewrapper={styles.titlewrapper} />
            <div className={styles.wrappercenter}>
                <div className={styles.price}>
                    <div className={`${styles.ongles} ${styles.actif} `}>
                        <h2>Beauté des mains</h2>
                    </div>
                    <div className={`${styles.sourcils} `}>
                        <p>container two</p>
                    </div>
                    <div className={`${styles.cils} `}>
                        <p>container three</p>
                    </div>
                </div>
                <Image src={imgtopright} alt={""} classNamewrapper={styles.imgtopright} />
                <Image src={imgbottomright} alt={""} classNamewrapper={styles.imgbottomright} />
            </div>
        </div>
    )
}