import { HoverEffect } from "../components/card-hover-effect";
import { motion } from "framer-motion";

const fadeInVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <div>
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="text-4xl font-bold text-white">
                Our Core Values
            </motion.h2>
        </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Innovation",
    description:
      "We prioritize innovation in all aspects of our work. By fostering a culture of creativity and continuous improvement, we develop cutting-edge technologies that drive progress and create value for our customers.",
  },
  {
    title: "Customer-Centricity",
    description:
      "Our customers are at the heart of everything we do. We strive to understand their needs and exceed their expectations by delivering tailored solutions that enhance their experience and drive their success.",
  },
  {
    title: "Integrity",
    description:
      "We conduct our business with the highest standards of integrity and ethics. Transparency, honesty, and accountability are the cornerstones of our relationships with clients, partners, and employees.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to excellence in every aspect of our operations. From product development to customer service, we set high standards and work diligently to achieve and surpass them.",
  },
  {
    title: "Collaboration",
    description:
      "Collaboration is key to our success. We believe in the power of teamwork, both within our organization and with our partners. By embracing diverse perspectives, we create more innovative and effective solutions.",
  },
  {
    title: "Sustainability",
    description:
      "We are dedicated to sustainable practices that benefit our planet and future generations. Our commitment to environmental responsibility guides our decisions, from product design to operational processes.",
  },
];
