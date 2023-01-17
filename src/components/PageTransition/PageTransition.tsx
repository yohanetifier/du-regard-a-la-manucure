import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { SelectedService } from "../App/App";
import Footer from "../Footer/Footer";
import styles from "./PageTransition.module.scss";
import loader from '../../assets/images/logo/svgloader.svg';

function PageTransition({ children }: any) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading &&
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          // exit={{ opacity: 0 }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <img src={loader} alt="" />
        </motion.div>
      }
      {!isLoading &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        // exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {children}
        </motion.div>
      }
    </>
  )
}

export default PageTransition