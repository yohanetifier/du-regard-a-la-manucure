import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./Banner.module.scss";

interface Props {
	src: string;
	className?: string;
	classNamewrapper?: string;
	title: string;
	hasButton?: boolean;
	linkButton?: string;
	labelButton?: string;
	titleClass?: string;
}

function Banner({
	src,
	className,
	classNamewrapper,
	title,
	hasButton,
	linkButton,
	labelButton,
	titleClass,
}: Props) {
	return (
		<div className={`${styles.mainwrapper} ${classNamewrapper}`}>
			<img
				className={`${styles.imgbelowright} ${className}`}
				src={src}
				alt=""
			/>
			<div className={styles.titleWrapper}>
				<h1 className={titleClass}>{title}</h1>
				{hasButton && (
					<>
						<Button
							to={linkButton!}
							label={labelButton!}
							classnamelink={styles.backgroundColor}
							width="200px"
							external={true}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default Banner;
