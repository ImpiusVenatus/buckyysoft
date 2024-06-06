import { motion } from "framer-motion";

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function ContactSection() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <div>
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="text-4xl font-bold text-white">
                So, what are you waiting for? Let's get started!
            </motion.h2>
        </div>
    </div>
  );
}