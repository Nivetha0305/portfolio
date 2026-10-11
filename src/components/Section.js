import React from "react";
import { motion } from "framer-motion";

export default function Section({
  id,
  children,
  className = "",
  ariaLabelledby,
}) {
  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
