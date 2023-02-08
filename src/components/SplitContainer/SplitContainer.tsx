import React from "react";
import styles from "./SplitContainer.module.scss";

type Props = {
	children: any;
	img: string;
	imgAlt: string;
};

function SplitContainer({ children, img, imgAlt }: Props) {
	return (
		<section className={styles.mainWrapper}>
			<figure className={styles.imgWrapper}>
				<img src={img} alt={imgAlt} className={styles.img} />
			</figure>
			<div className={styles.mentionsWrapper}>
				<div className={styles.superimposeWrapper}>
					<div className={styles.reduceWidth}>{children}</div>
				</div>
			</div>
		</section>
	);
}

export default SplitContainer;
