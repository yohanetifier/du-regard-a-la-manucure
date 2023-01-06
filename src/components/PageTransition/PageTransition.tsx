import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../Footer/Footer";
import styles from "./PageTransition.module.scss";

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
          exit={{ opacity: 0 }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <p>Du regard à la manucure</p>
        </motion.div>
      }
      {!isLoading &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {children}
        </motion.div>
      }
    </>
  )
}

export default PageTransition