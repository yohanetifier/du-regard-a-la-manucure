import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface Props {
    to: string
    classnamelink: string
    label: string
    classnamemainwrapper: string
}

function Button({ to, classnamelink, label, classnamemainwrapper }: Props) {
    return (
        <div className={classnamemainwrapper}>
            <Link to={to} className={`${classnamelink} ${styles.defaultstyles}`}>{label}</Link>
        </div>
    )
}

export default Button; 