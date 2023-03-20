import Image from "../Image/Image";
import styles from "./Concept.module.scss";
import Button from "../Button/Button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface AnimationProps {
	opacity?: number;
	x?: string | number;
	duration?: number;
}

interface VariantsProps {
	initial: AnimationProps;
	animate: AnimationProps;
}

export interface Img {
	src: string;
	alt: string;
	classNamewrapper?: string;
	ref?: string;
}

interface Props {
	src: string;
	alt: string;
	title: string;
	children: string;
	to: string;
	label: string;
	secondTo?: string;
	secondLabel?: string;
	// numberOfButton: string;
}

function Concept({
	src,
	alt,
	title,
	children,
	to,
	label,
}: // secondTo,
// secondLabel,
// numberOfButton,
Props) {
	const scrollRef = useRef(null);
	const isInView = useInView(scrollRef, { once: true, amount: 0.2 });
	const isMobileS = useMediaQuery({ query: "(max-width: 280px)" });
	console.log(isMobileS);

	return (
		<div className={styles.mainwrapper} ref={scrollRef}>
			{isInView && (
				<motion.div
					className={styles.imagewrapper}
					initial={{ x: "-100vw" }}
					animate={{ x: 0 }}
					transition={{ duration: 1 }}
				>
					<Image
						src={src}
						alt={alt}
						classNamewrapper={styles.firstimage}
					/>
				</motion.div>
			)}
			{isInView && (
				<motion.div
					className={styles.descriptionwrapper}
					initial={{ x: "100vw" }}
					animate={{ x: 0 }}
					transition={{ duration: 1 }}
				>
					<div className={styles.layoutwrapper}>
						<span>
							<motion.h2
								className={styles.title}
								initial={{
									y: 200,
								}}
								animate={{
									y: 0,
								}}
								transition={{
									delay: 2,
									duration: 1,
								}}
							>
								{title}
							</motion.h2>
						</span>
						<div className={styles.exercice}>
							<motion.p
								initial={{
									y: 300,
								}}
								animate={{
									y: 0,
								}}
								transition={{
									delay: 3,
									duration: 1,
									staggerChildren: 0.05,
								}}
								className={styles.chidlren}
							>
								{children}
							</motion.p>
						</div>
						<motion.div
							className={styles.buttonwrapper}
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							transition={{
								delay: 4,
								duration: 1,
							}}
						>
							<Button
								to={to}
								label={label}
								classnamelink={styles.button}
							/>
						</motion.div>
					</div>
				</motion.div>
			)}
		</div>
	);
}

export default Concept;
