import styles from './DescriptionWrapper.module.scss';
import Title from "../../../Title/Title";
import Description from "../../../Description/Description";

interface Props {
    title: string
    description: string
}

export default function DescriptionWrapper({ title, description }: Props) {
    return (
        <div className={styles.descriptionsubwrapper}>
            <Title
                children={title}
            />
            <Description
                children={description}
            />
        </div>
    )
}