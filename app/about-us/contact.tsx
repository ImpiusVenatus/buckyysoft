import { motion } from "framer-motion";

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function ContactSection() {
  return (
    <div className="mx-auto px-8">
        <div>
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="text-6xl max-w-[1200px] text-center font-bold text-white py-8">
                So, what are you waiting for? Let's get started!
            </motion.h2>
        </div>
    </div>
  );
}