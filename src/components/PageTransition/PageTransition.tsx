import { motion } from "framer-motion";
import { createContext, useContext, useState } from "react";
import { SelectedService } from "../App/App";
import Footer from "../Footer/Footer";
import styles from "./PageTransition.module.scss";
import svgLoader from '../../assets/images/logo/svgloader.svg';
import { Loader } from '../App/App';

function PageTransition({ children }: any) {
  // const [isLoading, setIsLoading] = useState(true);
  const loader = useContext(Loader);
  const { isLoading, setIsLoading } = loader;

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
          <img src={svgLoader} alt="" />
        </motion.div>
      }
      {!isLoading &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          // exit={{ opacity: 0, transition: { duration: 1 } }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          {children}
        </motion.div>
      }
    </>
  )
}

export default PageTransition