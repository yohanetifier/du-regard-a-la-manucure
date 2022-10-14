import Image from "../../Image/Image";
import styles from "./DisplayImage.module.scss";

interface subProps {
    src: string
    categorie: string
}

interface Props {
    imageAssets: subProps[]
}

function DisplayImage({
    imageAssets }
    : Props) {
    return (
        <div className={styles.imgwrapper}>
            {imageAssets.map((item, i) => (
                <Image
                    src={item.src}
                    alt={item.src}
                    classNamewrapper={styles.img}
                />
            ))}
        </div>
    )
}

export default DisplayImage; 
