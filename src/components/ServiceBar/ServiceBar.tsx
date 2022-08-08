import styles from './ServiceBar.module.scss'; 

interface Props {
    classnamemainwrapper: string
    classnametitlewrapper: string
    changeClass?: any
}

const services = [
    {
        title: "Ongles"
    },
    {
        title: "Sourcils"
    },
    {
        title: "Cils"
    }
];


export default function ServiceBar({ classnamemainwrapper, classnametitlewrapper, changeClass }: Props) {
    return (
        <div className={classnamemainwrapper}>
            <div className={classnametitlewrapper}>
                {services.map(({ title }) => (
                    <h2 className={styles.title} onClick={() => changeClass(title)}>{title}</h2>
                ))}
            </div>
        </div>
    )
}