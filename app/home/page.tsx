"use client";
import React, { useEffect, useRef } from "react";
import { FlipWords } from "../components/flip-words";
import { Navigation } from "../components/nav";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import { AuroraBackground } from "../components/aurora-background";
import { motion, useAnimation, useInView } from "framer-motion";
import { Mouse } from "lucide-react";
import SignupButton from "../components/SignupButton";

const words = ["better", "cute", "beautiful", "modern"];

const typewriterWords = [
  { text: "Build" },
  { text: "awesome" },
  { text: "apps" },
  { text: "with" },
  { text: "BuckyySoft.", className: "text-blue-500 dark:text-blue-500" },
];

const Example = () => {
  const auroraControls = useAnimation();
  const nextDivControls = useAnimation();
  const laterDivControls = useAnimation();
  
  const auroraRef = useRef(null);
  const nextDivRef = useRef(null);
  const laterDivRef = useRef(null);

  const auroraInView = useInView(auroraRef, { amount: 0.5 });
  const nextDivInView = useInView(nextDivRef, { amount: 0.5 });
  const laterDivInView = useInView(laterDivRef, { amount: 0.5 });

  useEffect(() => {
    if (auroraInView) {
      auroraControls.start("visible");
    } else {
      auroraControls.start("hidden");
    }

    if (nextDivInView) {
      nextDivControls.start("visible");
    } else {
      nextDivControls.start("hidden");
    }

    if (laterDivInView) {
      laterDivControls.start("visible");
    } else {
      laterDivControls.start("hidden");
    }
  }, [auroraInView, nextDivInView, laterDivInView, auroraControls, nextDivControls, laterDivControls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Navigation />
      <div>
        <AuroraBackground>
          <motion.div
            ref={auroraRef}
            initial="hidden"
            animate={auroraControls}
            variants={variants}
            transition={{ duration: 1 }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="flex flex-col items-center justify-center h-[40rem]">
              <p className="text-neutral-600 dark:text-neutral-200 text-md sm:text-lg md:text-2xl lg:text-4xl">
                The road to build your dream starts from here
              </p>
              <TypewriterEffectSmooth words={typewriterWords} />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{ display: "inline-block" }}
              >
                <Mouse size={40} color="#ffffff" />
              </motion.div>
            </div>
          </motion.div>
        </AuroraBackground>
        <motion.div
          ref={nextDivRef}
          initial="hidden"
          animate={nextDivControls}
          variants={variants}
          transition={{ duration: 1 }}
          className="h-[40rem] flex justify-center items-center px-4"
        >
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={words} /> <br />
            websites with Aceternity UI
          </div>
        </motion.div>
        <motion.div
          ref={laterDivRef}
          initial="hidden"
          animate={laterDivControls}
          variants={variants}
          transition={{ duration: 1 }}
          className="h-[40rem] flex justify-center items-center px-4"
        >
          <SignupButton />
        </motion.div>
      </div>
    </div>
  );
};

export default Example;
