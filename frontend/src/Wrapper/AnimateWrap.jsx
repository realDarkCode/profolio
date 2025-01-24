import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

const AnimateWrap = (Component, className) =>
  function () {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.3, once: true }}
        className={twMerge(
          "flex items-center justify-center flex-1 w-full",
          className
        )}
      >
        <Component />
      </motion.div>
    );
  };

export default AnimateWrap;
