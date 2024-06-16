"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "../components/nav";
import { Mouse } from "lucide-react";
import Image from "next/image";
import ContactButton from "./contact-button";
import { PageOne } from "./page-one";
import { PageTwo } from "./page-two";
import { PageThree } from "./page-three";
import { PageFour } from "./page-four";
import { PageFive } from "./page-five";
import { PageSix } from "./page-six";
import { PageSeven } from "./page-seven";

const sections = [
  {
    id: 1,
    content: (
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 flex flex-col items-center justify-center min-h-screen text-white">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Visual Creations
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-4 font-extralight text-zinc-300">
            A Journey Through Imagination and Innovation
          </p>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="py-8 sm:py-10 md:py-12 flex flex-col items-center justify-center font-extralight text-xs sm:text-sm"
          >
            <Mouse size={40} color="#ffffff" />
            <span className="mt-2">Scroll to reveal</span>
          </motion.div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="container mx-auto flex flex-col pt-20 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Designs [1]
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <PageOne />
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="container mx-auto flex flex-col pt-20 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Designs [2]
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <PageTwo />
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="container mx-auto flex flex-col pt-20 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Designs [3]
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <PageThree />
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="container mx-auto flex flex-col pt-20 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Designs [4]
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <PageFour />
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div className="container mx-auto flex flex-col pt-20 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Designs [5]
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <PageFive />
      </div>
    ),
  },
  {
    id: 7,
    content: (
      <div className="container mx-auto flex flex-col pt-20 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Designs [6]
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <PageSix />
      </div>
    ),
  },
  {
    id: 8,
    content: (
      <div className="container mx-auto flex flex-col pt-20 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Designs [7]
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <PageSeven />
      </div>
    ),
  },
  {
    id: 9,
    content: (
      <div className="container mx-auto flex flex-col justify-center min-h-screen py-32 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-bold pb-4 text-center"
        >
          So, what are you waiting for? Let's collaborate
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <ContactButton />
        </motion.div>
      </div>
    ),
  },
];

export default function Example() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (deltaY: number) => {
    if (isScrolling) return;

    setIsScrolling(true);
    if (deltaY > 0) {
      setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else {
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const handleWheel = (event: WheelEvent) => {
    handleScroll(event.deltaY);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      handleScroll(1);
    } else if (event.key === "ArrowUp") {
      handleScroll(-1);
    }
  };

  const handleNext = () => {
    setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const handlePrevious = () => {
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScrolling]);

  return (
    <div className="overflow-hidden">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[currentSection].id}
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {sections[currentSection].content}
        </motion.div>
      </AnimatePresence>
      
      {currentSection > 0 && (
        <div className="fixed bottom-4 left-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          disabled={currentSection === 0}
        >
          Previous
        </button>
      </div>
      )}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-2 rounded-md"
          disabled={currentSection === sections.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
