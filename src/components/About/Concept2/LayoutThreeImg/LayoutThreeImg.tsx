import Image from "../../../Image/Image";
import styles from "./LayoutThreeImg.module.scss";
import { Assets } from "../Concept2";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function LayoutThreeImg({ assets, setAnimationOver }: Assets) {
	const wrapper = useRef(null);
	const isInView = useInView(wrapper, { once: true, amount: 0.5 });

	const container = {
		initial: {
			scale: 0,
		},
		animate: {
			scale: 1,
			transition: {
				staggerChildren: 0.5,
				// delayChildren: 1
			},
		},
	};

	const item = {
		initial: {
			scale: 0,
		},
		animate: {
			scale: 1,
			transition: {
				duration: 2,
			},
		},
	};

	return (
		<motion.div
			className={styles.imgwrapper}
			ref={wrapper}
			variants={container}
			initial="initial"
			animate={isInView && "animate"}
		>
			{assets.map(({ src, alt, className }, index) => (
				<>
					<motion.div
						className={`${styles[className!]}`}
						variants={item}
						onAnimationComplete={() => setAnimationOver!(true)}
						key={index}
					>
						<Image
							src={src}
							alt={alt}
							classNamewrapper={styles.fullHeight}
						/>
					</motion.div>
				</>
			))}
		</motion.div>
	);
}
