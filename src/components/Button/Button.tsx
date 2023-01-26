import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface Props {
	to: string;
	classnamelink?: string;
	label: string;
	width?: string;
	external?: boolean;
}

function Button({ to, classnamelink, label, width, external = false }: Props) {
	return (
		<>
			{external ? (
				<a
					href={to}
					className={`${classnamelink} ${styles.defaultStyles}`}
					style={{ width }}
					target="_blank"
				>
					{label}
				</a>
			) : (
				<Link
					to={to}
					className={`${classnamelink} ${styles.defaultStyles}`}
					style={{ width }}
				>
					{label}
				</Link>
			)}
		</>
	);
}

export default Button;
