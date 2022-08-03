interface Props {
    classnamemainwrapper: string
    classnametitlewrapper: string
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


export default function ServiceBar({ classnamemainwrapper, classnametitlewrapper }: Props) {
    return (
        <div className={classnamemainwrapper}>
            <div className={classnametitlewrapper}>
                {services.map(({ title }) => (
                    <h2>{title}</h2>
                ))}
            </div>
        </div>
    )
}