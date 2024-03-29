import Title from "../../../Title/Title";
import styles from "./TextWrapper.module.scss";
import { Props } from "../../../About/Concept2/DescriptionWrapper/DescriptionWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface Animation extends Props {
	isReversedRow: boolean;
	animation?: boolean;
}

export default function TextWrapper({
	title,
	description,
	isReversedRow,
	animation,
}: Animation) {
	const wrapper = useRef<HTMLDivElement>(null);
	const isInView = useInView(wrapper, { once: true, amount: 0.5 });
	// const isSafari =
	// 	window.navigator.userAgent.includes("Safari") &&
	// 	!window.navigator.userAgent.includes("Chrome");
	// const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

	return (
		<>
			{animation ? (
				<div className={styles.descriptionwrapper} ref={wrapper}>
					{isInView && (
						<motion.div
							className={styles.descriptionsubwrapper}
							initial={{ x: isReversedRow ? "100%" : "-100%" }}
							animate={{ x: 0 }}
							transition={{ duration: 2 }}
						>
							<Title className={styles.title}>{title}</Title>
							<p className={styles.description}>{description}</p>
						</motion.div>
					)}
				</div>
			) : (
				<div className={styles.descriptionwrapper} ref={wrapper}>
					<div className={styles.descriptionsubwrapper}>
						<Title>{title}</Title>
						<p>{description}</p>
					</div>
				</div>
			)}
		</>
	);
}
