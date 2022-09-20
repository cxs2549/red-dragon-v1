import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const AnimLayout = ({ children }) => (
  <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: "linear" }}
    
  >
    {children}
  </motion.main>
)

export default AnimLayout
