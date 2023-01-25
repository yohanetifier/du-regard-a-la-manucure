import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './Banner.module.scss';

interface Props {
    src: string
    className?: string
    classNamewrapper?: string
}

function Banner({ src, className, classNamewrapper }: Props) {
    return (
        <div className={`${styles.mainwrapper} ${classNamewrapper}`}>
            <img className={`${styles.imgbelowright} ${className}`} src={src} alt="" />
            <div className={styles.titleWrapper}>
                <h1>Plus qu'une parenthèse bien être... une mise en beauté unique </h1>
                <Button
                    to="https://www.planity.com/du-regard-a-la-manucure-deplacement-a-domicile-95510-aincourt"
                    label='Reservez'
                    classnamelink={styles.backgroundColor}
                    width='200px'
                    external={true}
                />
            </div>
        </div>
    )
}

export default Banner; 