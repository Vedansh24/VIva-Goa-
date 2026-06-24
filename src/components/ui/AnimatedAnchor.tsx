"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

type Props = HTMLMotionProps<"a"> & {
  delay?: number;
};

export default function AnimatedAnchor({ children, delay = 0, ...props }: Props) {
  return (
    <motion.a
      {...props}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
