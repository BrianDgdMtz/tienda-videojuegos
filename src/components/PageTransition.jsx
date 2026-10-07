import { motion } from 'framer-motion';

const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 15,
    filter: 'blur(5px)'
  },
  in: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)'
  },
  out: { 
    opacity: 0, 
    y: -15,
    filter: 'blur(5px)'
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
