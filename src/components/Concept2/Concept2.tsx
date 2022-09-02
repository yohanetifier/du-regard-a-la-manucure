import styles from './Concept2.module.scss';
import Button from '../Button/Button';

interface Props {
    src?: string
    classnamemainwrapper: string
    classnamewrapperimg: string
    classnamewrapperdescription: string
    title: string
    description: string
    classnametitle?: string
    classnamesubwrapperdescription?: string
    to: string
    label: string
    classnamelinkwrapper: string
    classnamelink: string
    buttonwrapper: string
    secondto: string
    secondlabel: string
}

function Concept2({
    src,
    classnamemainwrapper,
    classnamewrapperimg,
    classnamewrapperdescription,
    title,
    description,
    classnametitle,
    classnamesubwrapperdescription,
    to,
    label,
    classnamelinkwrapper,
    classnamelink,
    buttonwrapper,
    secondto,
    secondlabel
}: Props) {
    return (
        <div className={classnamemainwrapper}>
            <div className={classnamewrapperimg}>
                <img src={src} />
            </div>
            <div className={`${classnamewrapperdescription} `}>
                <div className={classnamesubwrapperdescription}>
                    <h2 className={`${classnametitle} ${styles.defaultstyles}`}>{title}</h2>
                    <p>{description}</p>
                    <div className={buttonwrapper}>
                        <Button
                            to={to}
                            label={label}
                            classnamelink={classnamelink}
                            classnamemainwrapper={classnamelinkwrapper}
                        />
                        <Button
                            to={secondto}
                            label={secondlabel}
                            classnamelink={classnamelink}
                            classnamemainwrapper={classnamelinkwrapper}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Concept2;