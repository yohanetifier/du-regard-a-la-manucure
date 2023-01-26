import styles from "./Concept3.module.scss";
import Image from "../../Image/Image";
import Description from "../../Description/Description";
import { Assets } from "../Concept2/Concept2";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Concept3({ assets, description }: Assets) {
	const wrapper = useRef<HTMLDivElement>(null);
	const isInView = useInView(wrapper, { once: true, amount: 0.3 });
	const [animationOver, setAnimationOver] = useState(false);
	const MotionImage = motion(Image);
	const MotionDescription = motion(Description);

	return (
		<div className={styles.mainwrapper} ref={wrapper}>
			{assets.map(({ src, alt, className }, i) => (
				<>
					{isInView && (
						<MotionImage
							src={src}
							alt={alt}
							classNamewrapper={`${styles[className!]}`}
							initial={i === 0 ? { x: "-100%" } : { x: "100%" }}
							animate={{ x: 0 }}
							transition={{ duration: 2 }}
							onAnimationStart={() => setAnimationOver(true)}
							// custom={i}
						/>
					)}
				</>
			))}
			{animationOver && (
				<MotionDescription
					children={description!}
					className={styles.description}
					initial={{ y: 200 }}
					animate={{ y: 0 }}
					transition={{ duration: 2 }}
				/>
			)}
		</div>
	);
}
