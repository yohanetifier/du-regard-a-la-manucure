import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface Props {
	to: string;
	classnamelink?: string;
	label: string;
	external?: boolean;
}

function Button({ to, classnamelink, label, external = false }: Props) {
	return (
		<>
			{external ? (
				<a
					href={to}
					className={`${classnamelink} ${styles.defaultStyles}`}
					target="_blank"
					rel="noreferrer"
				>
					{label}
				</a>
			) : (
				<Link
					to={to}
					className={`${classnamelink} ${styles.defaultStyles}`}
				>
					{label}
				</Link>
			)}
		</>
	);
}

export default Button;
