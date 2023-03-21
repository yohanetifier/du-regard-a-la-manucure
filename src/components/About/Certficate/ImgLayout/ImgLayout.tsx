import styles from "./ImgLayout.module.scss";
import Image from "../../../Image/Image";
import { Assets } from "../../Concept2/Concept2";
import { motion } from "framer-motion";
import img from "../../../../assets/images/5A9FB37B-4BFF-47E5-AD5F-1A08E667B3D1.jpg";
import { useMediaQuery } from "react-responsive";

interface Props extends Assets {
	isInView: boolean;
}

export default function ImgLayout({ assets, isInView }: Props) {
	const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
	const MotionImage = motion(Image);
	const container = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				delayChildren: 0.6,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};
	return (
		<>
			<motion.div
				className={styles.slide}
				variants={container}
				initial="initial"
				animate={isInView && "animate"}
			>
				{assets.map(({ src, alt, className }) => (
					<motion.img src={src} alt={alt} variants={item} />
				))}
			</motion.div>
		</>
	);
}
