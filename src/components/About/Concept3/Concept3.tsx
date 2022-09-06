import styles from './Concept3.module.scss';
import Image from "../../Image/Image";

interface Props {
    src: string
    alt: string
    classname: string
}

interface Assets {
    assets: Props[]
}

export default function Concept3(props: Assets) {
    return (
        <div className={styles.mainwrapper}>
            {props.assets.map(({ src, alt, classname }) => (
                <Image src={src} alt={alt} classNamewrapper={classname} />
            ))}
        </div>
    )
}
