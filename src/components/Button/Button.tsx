import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface Props {
    to: string
    classnamelink?: string
    label: string
    width?: string
}

function Button({ to, classnamelink, label, width }: Props) {
    return <Link to={to} className={`${classnamelink} ${styles.defaultStyles}`} style={{ width }}>{label}</Link>

}

export default Button; 