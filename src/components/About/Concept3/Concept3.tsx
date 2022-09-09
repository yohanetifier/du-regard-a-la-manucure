import styles from './Concept3.module.scss';
import Image from "../../Image/Image";
import Description from '../../Description/Description';
import { Props } from "../Concept2/Concept2";
import { Assets } from "../Concept2/Concept2";



export default function Concept3(props: Assets) {
    return (
        <div className={styles.mainwrapper}>
            {props.assets.map(({ src, alt, className }) => (
                <>
                    <Image
                        src={src}
                        alt={alt}
                        classNamewrapper={`${styles[className]}`}
                    />
                    <Description
                        children={props.description!}
                        className={styles.description}
                    />
                </>
            ))}
        </div>
    )
}
