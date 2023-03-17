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
	const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
	console.log("isTablet", isTablet);
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
			{isTablet ? (
				<div className={styles.test}>
					<img src={img} alt="" />
					<img src={img} alt="" />
					<img src={img} alt="" />
					<img src={img} alt="" />
					<img src={img} alt="" />
				</div>
			) : (
				<motion.div
					className={styles.imgwrapper}
					variants={container}
					initial="initial"
					animate={isInView && "animate"}
				>
					{assets.map(({ src, alt, className }) => (
						<MotionImage
							src={src}
							alt={alt}
							classNamewrapper={`${styles[className!]}`}
							variants={item}
						/>
					))}
				</motion.div>
			)}
		</>
	);
}
