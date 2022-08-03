import imgBelowRight from '../../assets/images/apostolos-vamvouras-Mky1mc85XQQ-unsplash (1).jpg'
import styles from './Banner.module.scss'

interface Props {
    src: string
    classNamewrapper: string
    className: string
}

function Banner({ src, className, classNamewrapper }: Props) {
    return (
        <div className={classNamewrapper}>
            <img className={className} src={src} alt="" />
        </div>
    )
}

export default Banner; 