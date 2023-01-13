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
                    to="/"
                    label='Reservez'
                    classnamelink={ styles.backgroundColor }
                />
            </div>
        </div>
    )
}

export default Banner; 