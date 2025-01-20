import { motion } from "framer-motion";
import React from "react";
const AnimateWrap = (Component, className) =>
  function () {
    return (
      <motion.div
        whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center flex-1 w-full ${className}`}
      >
        <Component />
      </motion.div>
    );
  };

export default AnimateWrap;
