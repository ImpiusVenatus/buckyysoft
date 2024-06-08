"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "../components/nav";
import { Mouse } from "lucide-react";
import Image from "next/image";
import ContactButton from "./contact-button";

// Define the sections with more complex content
const sections = [
  {
    id: 1,
    content: (
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 flex flex-col items-center justify-center min-h-screen text-white">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <h1 className="text-8xl font-bold">Visual Creations</h1>
          <p className="text-xl text-center mt-4 font-extralight text-zinc-300">A Journey Through Imagination and Innovation</p>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="py-12 flex flex-col items-center justify-center font-extralight text-sm"
          >
            <Mouse size={40} color="#ffffff" />
            Scroll to reveal
          </motion.div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="container mx-auto flex flex-col py-32 text-white">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Logo designs
        </motion.h1>
        <motion.div 
          initial={{ opacity: 1, x: -3000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <div className="flex justify-around gap-4 py-16">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design1.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Eita ekta shundor logo</p>
          </motion.div>
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design2.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Eita arekta shundor logo</p>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="container mx-auto flex flex-col py-32 text-white">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Logo designs
        </motion.h1>
        <motion.div 
          initial={{ opacity: 1, x: -3000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <div className="flex justify-around gap-4 py-16">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design3.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Aro ekta logo. Not inspiring LGBTQ++</p>
          </motion.div>
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design4.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Eita amar vallagse</p>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="container mx-auto flex flex-col py-32 text-white">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Logo designs
        </motion.h1>
        <motion.div 
          initial={{ opacity: 1, x: -3000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <div className="flex justify-around gap-4 py-16">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design5.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Freight ki akhono bujhi na</p>
          </motion.div>
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design6.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Eita us</p>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="container mx-auto flex flex-col py-32 text-white">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Social Media Posts
        </motion.h1>
        <motion.div 
          initial={{ opacity: 1, x: -3000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <div className="flex justify-around gap-4 py-16">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design7.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Tech Aggregation na ki jeno, oitar jonno banano</p>
          </motion.div>
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design8.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Eitao</p>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div className="container mx-auto flex flex-col py-32 text-white">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold pb-4"
        >
          Social Media Posts
        </motion.h1>
        <motion.div 
          initial={{ opacity: 1, x: -3000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full h-px bg-zinc-800"
        >
        </motion.div>
        <div className="flex justify-around gap-4 py-16">
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design9.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Buckyyyyy er jonno banano. asfkhjndasklfh sdkjlgflhbds kjgnbdslk;g hjdsklghd</p>
          </motion.div>
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <div className="relative w-full" style={{ height: '350px', width: '550px' }}>
              <Image 
                src="/images/designs/design10.jpg" 
                alt="Scale Logo" 
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="pt-4 text-center mx-auto max-w-[24rem]">Eitao</p>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
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

  const handleScroll = (event: WheelEvent) => {
    if (isScrolling) return;

    setIsScrolling(true);
    if (event.deltaY > 0) {
      setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else {
      setCurrentSection((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const onWheel = (event: WheelEvent) => handleScroll(event);
    window.addEventListener("wheel", onWheel);
    return () => {
      window.removeEventListener("wheel", onWheel);
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
    </div>
  );
}
