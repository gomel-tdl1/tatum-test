import { FC, PropsWithChildren } from "preact/compat";
import { motion } from "framer-motion";

export const FadeInWhenVisible: FC<PropsWithChildren> = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0.7 },
    }}
  >
    {children}
  </motion.div>
);
