import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface Props {
    to: string
    classnamelink?: string
    label: string
}

function Button({ to, classnamelink, label }: Props) {
    return <Link to={to} className={`${classnamelink} ${styles.defaultStyles}`}>{label}</Link>

}

export default Button; 